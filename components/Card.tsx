import classNames from 'classnames';

import { Database } from '@/lib/database.types';
import { isClimbingProperties } from '@/lib/utils/isClimbingProperties';
import { isCoffeeProperties } from '@/lib/utils/isCoffeeProperties';
import { isPlantsProperties } from '@/lib/utils/isPlantsProperties';
import { isProjectsProperties } from '@/lib/utils/isProjectsProperties';
import { isReadingProperties } from '@/lib/utils/isReadingProperties';
import { isWritingProperties } from '@/lib/utils/isWritingProperties';

import { ClimbingCard } from './ClimbingCard';
import { CoffeeCard } from './CoffeeCard';
import { PlantCard } from './PlantCard';
import { ProjectCard } from './ProjectCard';
import { ReadingCard } from './ReadingCard';
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
    } else if (
      props.type === 'Reading' &&
      isReadingProperties(props.properties)
    ) {
      return <ReadingCard {...props.properties} />;
    } else if (
      props.type === 'Climbing' &&
      isClimbingProperties(props.properties)
    ) {
      return <ClimbingCard {...props.properties} />;
    } else if (
      props.type === 'Plants' &&
      isPlantsProperties(props.properties)
    ) {
      return <PlantCard {...props.properties} />;
    } else if (
      props.type === 'Coffee' &&
      isCoffeeProperties(props.properties)
    ) {
      return <CoffeeCard {...props.properties} />;
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
