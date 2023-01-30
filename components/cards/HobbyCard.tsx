import {
  isImageAndTextCardProperties,
  isImageCardProperties,
  isTextCardProperties,
} from '@/lib/utils/hobbyCardTypeGuards';
import { HobbyProperties } from '@/lib/utils/isHobbyProperties';

import { ImageAndTextCard, ImageCard, TextCard } from './hobbies';

type HobbyCardProps = HobbyProperties;

export function HobbyCard(props: HobbyCardProps) {
  if (props.cardStyle === 'image' && isImageCardProperties(props.properties)) {
    return <ImageCard label={props.label} {...props.properties} />;
  } else if (
    props.cardStyle === 'text' &&
    isTextCardProperties(props.properties)
  ) {
    return <TextCard label={props.label} {...props.properties} />;
  } else if (
    props.cardStyle === 'image_and_text' &&
    isImageAndTextCardProperties(props.properties)
  ) {
    return <ImageAndTextCard label={props.label} {...props.properties} />;
  } else {
    return null;
  }
}
