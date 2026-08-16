/**
 * LAYER: Interface
 * Contains: JsonLd component
 * Rules: Renderiza structured data. Sin lógica.
 */

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
