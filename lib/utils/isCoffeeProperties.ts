const coffeeTypes = ['Espresso', 'Filter'] as const;
type CoffeeType = (typeof coffeeTypes)[number];

export type CoffeeProperties = {
  type: CoffeeType;
  name: string;
  roaster: string;
  origin: string;
  notes: string;
};

export function isCoffeeProperties(
  properties: unknown
): properties is CoffeeProperties {
  if (typeof properties !== 'object' || !properties) {
    return false;
  }

  const castedProperties: Partial<CoffeeProperties> = properties;

  return (
    typeof castedProperties.type === 'string' &&
    coffeeTypes.includes(castedProperties.type) &&
    typeof castedProperties.name === 'string' &&
    typeof castedProperties.roaster === 'string' &&
    typeof castedProperties.origin === 'string' &&
    typeof castedProperties.notes === 'string'
  );
}
