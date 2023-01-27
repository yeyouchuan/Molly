import Image from 'next/image';

import { PlantsProperties } from '@/lib/utils/isPlantsProperties';

import { CardHeader } from '../../CardHeader';

type PlantCardProps = PlantsProperties;

export function PlantCard(props: PlantCardProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={props.imageUrl}
        alt={props.label}
        fill
        className="rounded-lg object-cover transition-all group-hover:mt-12"
      />

      <CardHeader category="Hobbies" subcategory="Plants" />
    </div>
  );
}
