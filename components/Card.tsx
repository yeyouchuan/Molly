import classNames from 'classnames';

import { Database } from '@/lib/database.types';
import { isHobbyProperties } from '@/lib/utils/isHobbyProperties';
import { isProjectsProperties } from '@/lib/utils/isProjectsProperties';
import { isReadingProperties } from '@/lib/utils/isReadingProperties';
import { isWritingProperties } from '@/lib/utils/isWritingProperties';

import { ProjectCard, ReadingCard, WritingCard } from './cards';
import { HobbyCard } from './cards/HobbyCard';

type CardProps = Database['public']['Tables']['cards']['Row'];

export function Card(props: CardProps) {
  function renderSpecificCard() {
    if (props.type === 'projects' && isProjectsProperties(props.properties)) {
      return <ProjectCard {...props.properties} />;
    } else if (
      props.type === 'writing' &&
      isWritingProperties(props.properties)
    ) {
      return <WritingCard {...props.properties} />;
    } else if (
      props.type === 'reading' &&
      isReadingProperties(props.properties)
    ) {
      return <ReadingCard {...props.properties} />;
    } else if (
      props.type === 'hobbies' &&
      isHobbyProperties(props.properties)
    ) {
      return <HobbyCard {...props.properties} />;
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
      <div className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 hover:bg-neutral-100">
        {renderSpecificCard()}
      </div>
    </div>
  );
}
