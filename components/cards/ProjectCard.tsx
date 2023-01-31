import Image from 'next/image';

import { cardImageSizes } from '@/lib/utils/cardImageSizes';
import { ProjectProperties } from '@/lib/utils/isProjectProperties';

import { CardHeader } from '../CardHeader';

type ProjectCardProps = ProjectProperties & {
  large?: boolean;
};

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="relative isolate h-full w-full">
      <Image
        src={props.imageUrl}
        alt={props.name}
        fill
        sizes={cardImageSizes(props.large)}
        className="-z-10 object-contain transition-transform group-hover:scale-105"
      />

      <CardHeader type="Projects" label={props.name} link={props.link} />
    </div>
  );
}
