export type ProjectProperties = {
  name: string;
  url: string;
  imageUrl: string;
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
    typeof castedProperties.url === 'string' &&
    typeof castedProperties.imageUrl === 'string'
  );
}
