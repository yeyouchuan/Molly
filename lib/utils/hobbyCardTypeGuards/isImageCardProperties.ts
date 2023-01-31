import { isLink, Link } from '../typeGuards/isLink';

export type ImageCardProperties = {
  imageUrl: string;
  description?: string;
  link?: Link;
};

export function isImageCardProperties(
  properties: unknown
): properties is ImageCardProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<ImageCardProperties> = properties;

  return (
    typeof castedProperties.imageUrl === 'string' &&
    (!castedProperties.hasOwnProperty('description') ||
      typeof castedProperties.description === 'string') &&
    (!castedProperties.hasOwnProperty('link') || isLink(castedProperties.link))
  );
}
