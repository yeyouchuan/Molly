import Image from 'next/image';

import { ImageCardProperties } from '@/lib/utils/hobbyCardTypeGuards/isImageCardProperties';

import { CardHeader } from '../../CardHeader';

type ImageCardProps = ImageCardProperties & {
  label: string;
};

export function ImageCard(props: ImageCardProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={props.imageUrl}
        alt={props.label}
        fill
        className="rounded-lg object-cover transition-all group-hover:mt-12"
      />

      <CardHeader type="Hobbies" label={props.label} link={props.link} />
    </div>
  );
}
