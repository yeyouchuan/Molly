import { isClimbingProperties } from '@/lib/utils/isClimbingProperties';
import { isCoffeeProperties } from '@/lib/utils/isCoffeeProperties';
import { HobbyProperties } from '@/lib/utils/isHobbyProperties';
import { isPlantsProperties } from '@/lib/utils/isPlantsProperties';

import { ClimbingCard, CoffeeCard, PlantCard } from './hobbies';

type HobbyCardProps = HobbyProperties;

export function HobbyCard(props: HobbyCardProps) {
  if (props.type === 'climbing' && isClimbingProperties(props.properties)) {
    return <ClimbingCard {...props.properties} />;
  } else if (props.type === 'coffee' && isCoffeeProperties(props.properties)) {
    return <CoffeeCard {...props.properties} />;
  } else if (props.type === 'plants' && isPlantsProperties(props.properties)) {
    return <PlantCard {...props.properties} />;
  } else {
    return null;
  }
}
