import { isLink, Link } from '../typeGuards/isLink';
import { isTag, Tag } from '../typeGuards/isTag';

export type TextCardProperties = {
  tags: Tag[];
  heading: string;
  subheading: string;
  body: string;
  link?: Link;
};

export function isTextCardProperties(
  properties: unknown
): properties is TextCardProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<TextCardProperties> = properties;

  return (
    Array.isArray(castedProperties.tags) &&
    castedProperties.tags.every((tag) => isTag(tag)) &&
    typeof castedProperties.heading === 'string' &&
    typeof castedProperties.subheading === 'string' &&
    typeof castedProperties.body === 'string' &&
    (!castedProperties.hasOwnProperty('link') || isLink(castedProperties.link))
  );
}
