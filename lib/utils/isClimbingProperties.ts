export type ClimbingProperties = {
  label: string;
  url: string;
  imageUrl: string;
};

export function isClimbingProperties(
  properties: unknown
): properties is ClimbingProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<ClimbingProperties> = properties;

  return (
    typeof castedProperties.label === 'string' &&
    typeof castedProperties.url === 'string' &&
    typeof castedProperties.imageUrl === 'string'
  );
}
