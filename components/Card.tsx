import classNames from 'classnames';

import { Database } from '@/lib/database.types';
import { isProjectsProperties } from '@/lib/utils/isProjectsProperties';
import { isWritingProperties } from '@/lib/utils/isWritingProperties';

import { ProjectCard } from './ProjectCard';
import { WritingCard } from './WritingCard';

type CardProps = Database['public']['Tables']['cards']['Row'];

export function Card(props: CardProps) {
  function renderSpecificCard() {
    if (props.type === 'Projects' && isProjectsProperties(props.properties)) {
      return <ProjectCard {...props.properties} />;
    } else if (
      props.type === 'Writing' &&
      isWritingProperties(props.properties)
    ) {
      return <WritingCard {...props.properties} />;
    } else {
      return null;
    }
  }

  return (
    <div
      className={classNames(
        props.large ? 'col-span-2 aspect-[2]' : 'aspect-square',
        'px-1 pb-2'
      )}
    >
      <div className="h-full w-full overflow-hidden rounded-lg bg-stone-100">
        {renderSpecificCard()}
      </div>
    </div>
  );
}
