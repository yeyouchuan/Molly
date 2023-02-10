import { isLink, Link } from '../isLink';

export type ImageAndTextCardProperties = {
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
    typeof castedProperties.heading === 'string' &&
    (!castedProperties.hasOwnProperty('link') || isLink(castedProperties.link))
  );
}
