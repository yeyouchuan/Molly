export type ProjectsProperties = {
  name: string;
  url: string;
  imageUrl: string;
};

export function isProjectsProperties(
  properties: unknown
): properties is ProjectsProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<ProjectsProperties> = properties;

  return (
    typeof castedProperties.name === 'string' &&
    typeof castedProperties.url === 'string' &&
    typeof castedProperties.imageUrl === 'string'
  );
}
