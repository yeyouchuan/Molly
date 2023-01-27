export type HobbyProperties = {
  type: string;
  properties: Record<string, any>;
};

export function isHobbyProperties(
  properties: unknown
): properties is HobbyProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<HobbyProperties> = properties;

  return (
    typeof castedProperties.type === 'string' &&
    typeof castedProperties.properties === 'object' &&
    castedProperties !== null
  );
}
