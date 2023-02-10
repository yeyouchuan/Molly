import { HobbyProperties } from '@/lib/utils/type-guards/card-types';
import {
  isImageAndTextCardProperties,
  isImageCardProperties,
  isTextCardProperties,
} from '@/lib/utils/type-guards/hobby-card-types';

import { ImageAndTextCard, ImageCard, TextCard } from './hobbies';

type HobbyCardProps = HobbyProperties & {
  large?: boolean;
};

export function HobbyCard(props: HobbyCardProps) {
  if (props.cardStyle === 'image' && isImageCardProperties(props.properties)) {
    return (
      <ImageCard
        label={props.label}
        large={props.large}
        {...props.properties}
      />
    );
  } else if (
    props.cardStyle === 'text' &&
    isTextCardProperties(props.properties)
  ) {
    return (
      <TextCard label={props.label} large={props.large} {...props.properties} />
    );
  } else if (
    props.cardStyle === 'image_and_text' &&
    isImageAndTextCardProperties(props.properties)
  ) {
    return (
      <ImageAndTextCard
        label={props.label}
        large={props.large}
        {...props.properties}
      />
    );
  } else {
    return null;
  }
}
