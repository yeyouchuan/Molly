import { isLink, Link } from '../isLink';

export type ProjectProperties = {
  name: string;
  imageUrl: string;
  link?: Link;
};

export function isProjectProperties(
  properties: unknown
): properties is ProjectProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<ProjectProperties> = properties;

  return (
    typeof castedProperties.name === 'string' &&
    typeof castedProperties.imageUrl === 'string' &&
    (!castedProperties.hasOwnProperty('link') || isLink(castedProperties.link))
  );
}
