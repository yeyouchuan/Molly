export type WritingProperties = {
  title: string;
  type: 'Blog';
  url: string;
  publishedOn: string;
  contentPreview: string;
};

export function isWritingProperties(
  properties: unknown
): properties is WritingProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<WritingProperties> = properties;

  return (
    typeof castedProperties.title === 'string' &&
    castedProperties.type === 'Blog' &&
    typeof castedProperties.url === 'string' &&
    typeof castedProperties.publishedOn === 'string' &&
    typeof castedProperties.contentPreview === 'string'
  );
}
