import { isLink, Link } from '../isLink';
import { isTag, Tag } from '../isTag';

export type ImageAndTextCardProperties = {
  tags?: Tag[];
  heading: string;
  imageUrl: string;
  link?: Link;
};

export function isImageAndTextCardProperties(
  properties: unknown
): properties is ImageAndTextCardProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<ImageAndTextCardProperties> = properties;

  return (
    (!castedProperties.hasOwnProperty('tags') ||
      (Array.isArray(castedProperties.tags) &&
        castedProperties.tags.every((tag) => isTag(tag)))) &&
    typeof castedProperties.heading === 'string' &&
    (!castedProperties.hasOwnProperty('link') || isLink(castedProperties.link))
  );
}
