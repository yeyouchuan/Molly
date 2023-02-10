import classNames from 'classnames';
import Image from 'next/image';

import { CardHeader } from '@/components/CardHeader';
import { cardImageSizes } from '@/lib/utils/cardImageSizes';
import { ImageAndTextCardProperties } from '@/lib/utils/type-guards/hobby-card-types';

type ImageAndTextCardProps = ImageAndTextCardProperties & {
  label: string;
  large?: boolean;
};

export function ImageAndTextCard(props: ImageAndTextCardProps) {
  return (
    <div className="relative isolate flex h-full w-full flex-col justify-between">
      <Image
        src={props.imageUrl}
        alt={props.heading}
        fill
        sizes={cardImageSizes(props.large)}
        className="-z-10 object-cover transition-transform group-hover:scale-105"
      />

      <CardHeader type="Hobbies" label={props.label} link={props.link} />

      <div
        className={classNames(
          'flex grow flex-col justify-end bg-gradient-to-t from-neutral-50 p-5 transition-opacity',
          // State: focus
          'group-focus-within:opacity-0',
          // State: hover
          'group-hover:opacity-0'
        )}
      >
        <h3 className="font-serif-variation font-serif text-4xl font-light">
          {props.heading}
        </h3>
      </div>
    </div>
  );
}
