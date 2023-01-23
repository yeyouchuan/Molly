import Image from 'next/image';

import { ProjectsProperties } from '@/lib/utils/isProjectsProperties';

import { CardHeader } from './CardHeader';

type ProjectCardProps = ProjectsProperties;

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={props.imageUrl}
        alt={props.name}
        fill
        className="!top-14 object-contain"
      />

      <CardHeader breadcrumbs={`Projects / ${props.name}`} url={props.url} />
    </div>
  );
}
