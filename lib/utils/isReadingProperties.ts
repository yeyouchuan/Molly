import { isLink, Link } from './typeGuards/isLink';
import { isTag, Tag } from './typeGuards/isTag';

const readingTypes = ['Books'] as const;
type ReadingType = (typeof readingTypes)[number];

export type ReadingProperties = {
  type: ReadingType;
  title: string;
  author: string;
  tags: Tag[];
  imageUrl: string;
  link: Link;
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
    Array.isArray(castedProperties.tags) &&
    castedProperties.tags.every((tag) => isTag(tag)) &&
    typeof castedProperties.imageUrl === 'string' &&
    isLink(castedProperties.link)
  );
}
