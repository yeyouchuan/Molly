import Image from 'next/image';

import { cardImageSizes } from '@/lib/utils/cardImageSizes';
import { ImageCardProperties } from '@/lib/utils/hobbyCardTypeGuards/isImageCardProperties';

import { CardHeader } from '../../CardHeader';

type ImageCardProps = ImageCardProperties & {
  label: string;
  large?: boolean;
};

export function ImageCard(props: ImageCardProps) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between">
      <Image
        src={props.imageUrl}
        alt={props.description ?? props.label}
        fill
        sizes={cardImageSizes(props.large)}
        className="rounded-lg object-cover transition-all group-hover:mt-12"
      />

      <CardHeader type="Hobbies" label={props.label} link={props.link} />
      {props.description && (
        <div className="z-10 p-2">
          <span className="inline-block rounded-lg px-2 py-1 text-sm text-white/70 group-hover:bg-black/70">
            {props.description}
          </span>
        </div>
      )}
    </div>
  );
}
