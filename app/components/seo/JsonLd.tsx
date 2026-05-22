type JsonLdProps = {
  data: Record<string, unknown>;
  id?: string;
};

const serializeJsonLd = (data: Record<string, unknown>) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
