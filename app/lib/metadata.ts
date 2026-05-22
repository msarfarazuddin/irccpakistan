import type { Metadata } from "next";

import { buildAbsoluteUrl } from "@/app/lib/siteUrl";

type PageMetadataInput = Metadata & {
  canonicalPath: string;
};

export const createPageMetadata = ({
  canonicalPath,
  alternates,
  ...metadata
}: PageMetadataInput): Metadata => ({
  ...metadata,
  alternates: {
    ...alternates,
    canonical: buildAbsoluteUrl(canonicalPath),
  },
});
