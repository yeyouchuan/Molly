const cardStyles = ['image', 'text', 'image_and_text'] as const;
type CardStyle = (typeof cardStyles)[number];

export type HobbyProperties = {
  label: string;
  cardStyle: CardStyle;
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
    typeof castedProperties.label === 'string' &&
    typeof castedProperties.cardStyle === 'string' &&
    cardStyles.includes(castedProperties.cardStyle) &&
    typeof castedProperties.properties === 'object' &&
    castedProperties.properties !== null
  );
}
