export type PlantsProperties = {
  label: string;
  url: string;
  imageUrl: string;
};

export function isPlantsProperties(
  properties: unknown
): properties is PlantsProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<PlantsProperties> = properties;

  return (
    typeof castedProperties.label === 'string' &&
    typeof castedProperties.imageUrl === 'string'
  );
}
