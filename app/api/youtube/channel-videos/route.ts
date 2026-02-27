import { NextResponse } from "next/server";

function extractChannelIdentifier(channelUrl: string) {
  const url = channelUrl.trim();

  // https://www.youtube.com/@handle
  const handleMatch = url.match(/youtube\.com\/@([A-Za-z0-9._-]+)/);
  if (handleMatch) return { type: "handle" as const, value: handleMatch[1] };

  // https://www.youtube.com/channel/UCxxxx
  const channelIdMatch = url.match(/youtube\.com\/channel\/(UC[A-Za-z0-9_-]+)/);
  if (channelIdMatch) return { type: "channelId" as const, value: channelIdMatch[1] };

  // best-effort
  const cMatch = url.match(/youtube\.com\/c\/([A-Za-z0-9._-]+)/);
  if (cMatch) return { type: "custom" as const, value: cMatch[1] };

  const userMatch = url.match(/youtube\.com\/user\/([A-Za-z0-9._-]+)/);
  if (userMatch) return { type: "user" as const, value: userMatch[1] };

  return null;
}

async function ytFetch(path: string, params: Record<string, string>) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) throw new Error("Missing YOUTUBE_API_KEY in .env.local");

  const usp = new URLSearchParams({ ...params, key });
  const res = await fetch(`https://www.googleapis.com/youtube/v3/${path}?${usp.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`YouTube API error: ${res.status} ${text}`);
  }
  return res.json();
}

async function resolveChannelId(input: { type: string; value: string }) {
  if (input.type === "channelId") return input.value;

  const q = input.type === "handle" ? `@${input.value}` : input.value;

  const data = await ytFetch("search", {
    part: "snippet",
    q,
    type: "channel",
    maxResults: "1",
  });

  const item = data?.items?.[0];
  const channelId = item?.snippet?.channelId || item?.id?.channelId;
  if (!channelId) throw new Error("Could not resolve channel id from URL.");
  return channelId;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const channelUrl = searchParams.get("channelUrl") || "";
    const max = Math.min(Number(searchParams.get("max") || "12"), 50).toString();

    if (!channelUrl) {
      return NextResponse.json({ error: "channelUrl is required" }, { status: 400 });
    }

    const ident = extractChannelIdentifier(channelUrl);
    if (!ident) {
      return NextResponse.json({ error: "Invalid channel URL" }, { status: 400 });
    }

    const channelId = await resolveChannelId(ident);

    // Latest videos from channel
    const uploads = await ytFetch("search", {
      part: "snippet",
      channelId,
      order: "date",
      type: "video",
      maxResults: max,
    });

    const videos =
      (uploads.items || [])
        .map((it: any) => {
          const videoId = it?.id?.videoId;
          const snippet = it?.snippet || {};
          const thumb =
            snippet?.thumbnails?.medium?.url ||
            snippet?.thumbnails?.high?.url ||
            snippet?.thumbnails?.default?.url ||
            "";

          return {
            videoId,
            title: snippet?.title || "",
            thumb,
            embedUrl: videoId
              ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
              : "",
          };
        })
        .filter((v: any) => v.videoId && v.embedUrl);

    return NextResponse.json({ channelId, videos });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}