import Image from 'next/image';

import { ProjectProperties } from '@/lib/utils/isProjectProperties';

import { CardHeader } from '../CardHeader';

type ProjectCardProps = ProjectProperties;

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="relative isolate h-full w-full">
      <Image
        src={props.imageUrl}
        alt={props.name}
        fill
        className="-z-10 object-contain transition-transform group-hover:scale-105"
      />

      <CardHeader
        type="Projects"
        label={props.name}
        url={props.url}
        urlTooltipLabel="View project"
      />
    </div>
  );
}
