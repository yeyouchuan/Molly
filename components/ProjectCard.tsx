import Image from 'next/image';

import { ProjectsProperties } from '@/lib/utils/isProjectsProperties';

import { CardHeader } from './CardHeader';

type ProjectCardProps = ProjectsProperties;

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
        category="Projects"
        subcategory={props.name}
        url={props.url}
      />
    </div>
  );
}
