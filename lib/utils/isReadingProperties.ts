const readingTypes = ['Books'] as const;
type ReadingType = (typeof readingTypes)[number];

const readingStatuses = ['To read', 'Reading', 'Read'] as const;
type ReadingStatus = (typeof readingStatuses)[number];

export type ReadingProperties = {
  type: ReadingType;
  title: string;
  author: string;
  status: ReadingStatus;
  imageUrl: string;
  url: string;
};

export function isReadingProperties(
  properties: unknown
): properties is ReadingProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<ReadingProperties> = properties;

  return (
    typeof castedProperties.type === 'string' &&
    readingTypes.includes(castedProperties.type) &&
    typeof castedProperties.title === 'string' &&
    typeof castedProperties.author === 'string' &&
    typeof castedProperties.status === 'string' &&
    readingStatuses.includes(castedProperties.status) &&
    typeof castedProperties.imageUrl === 'string' &&
    typeof castedProperties.url === 'string'
  );
}
