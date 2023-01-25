import Image from 'next/image';

import { ClimbingProperties } from '@/lib/utils/isClimbingProperties';

import { CardHeader } from '../CardHeader';

type ClimbingCardProps = ClimbingProperties;

export function ClimbingCard(props: ClimbingCardProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={props.imageUrl}
        alt={props.label}
        fill
        className="rounded-lg object-cover transition-all group-hover:mt-12"
      />

      <CardHeader
        category="Climbing"
        subcategory={props.label}
        url={props.url}
      />
    </div>
  );
}
