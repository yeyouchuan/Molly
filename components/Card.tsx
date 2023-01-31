import classNames from 'classnames';
import { motion } from 'framer-motion';

import { Database } from '@/lib/database.types';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/framerMotionVariants';
import { isHobbyProperties } from '@/lib/utils/isHobbyProperties';
import { isProjectProperties } from '@/lib/utils/isProjectProperties';
import { isReadingProperties } from '@/lib/utils/isReadingProperties';
import { isWritingProperties } from '@/lib/utils/isWritingProperties';

import { ProjectCard, ReadingCard, WritingCard } from './cards';
import { HobbyCard } from './cards/HobbyCard';

type CardProps = Database['public']['Tables']['cards']['Row'];

export function Card(props: CardProps) {
  function renderSpecificCard() {
    if (props.type === 'projects' && isProjectProperties(props.properties)) {
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
        props.large ? 'aspect-[2] sm:col-span-2' : 'aspect-square',
        'px-1 pb-2',
        'min-h-[60px]'
      )}
    >
      <motion.div
        className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors hover:bg-neutral-100"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        {renderSpecificCard()}
      </motion.div>
    </div>
  );
}
