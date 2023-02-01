import classNames from 'classnames';
import { motion } from 'framer-motion';

import { Tooltip } from '@/components/Tooltip';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/framerMotionVariants';

import { IntroCardLink } from './IntroCardLink';

export function IntroCard() {
  return (
    <motion.div
      className="row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <div className="h-full w-full p-4 sm:p-8">
        <h1 className="font-serif-variation font-serif text-2xl font-light !leading-tight text-neutral-400 sm:text-3xl lg:text-4xl">
          Hey there, I’m <span className="text-neutral-900">Chester</span>{' '}
          👋&nbsp; Welcome to my{' '}
          <Tooltip side="bottom" content="Click to read more!">
            <a
              href="https://lowercasedc.wordpress.com/2023/02/01/what-the-heck-is-a-digital-garden/"
              className={classNames(
                'rounded underline decoration-dotted transition-colors',
                // State: focus
                'focus-visible:ring-4 focus-visible:ring-blue-200',
                // State: hover
                'hover:text-neutral-500'
              )}
            >
              digital garden
            </a>
          </Tooltip>{' '}
          🌱 I like building{' '}
          <IntroCardLink href="/projects" decorationColor="orange">
            things
          </IntroCardLink>
          , and I’m currently helping to build{' '}
          <IntroCardLink
            external
            href="https://mobbin.com"
            decorationColor="sky"
          >
            Mobbin
          </IntroCardLink>
          .
          <br />
          <br />
          In my free time, I enjoy brewing{' '}
          <IntroCardLink href="/hobbies" decorationColor="rose">
            coffee
          </IntroCardLink>
          , tending to my{' '}
          <IntroCardLink href="/hobbies" decorationColor="lime">
            plants
          </IntroCardLink>
          , and&nbsp;
          <IntroCardLink href="/hobbies" decorationColor="purple">
            climbing
          </IntroCardLink>{' '}
          (plastic) rocks.
          <br />
          <br />I do some{' '}
          <IntroCardLink href="/reading" decorationColor="fuchsia">
            reading
          </IntroCardLink>{' '}
          and{' '}
          <IntroCardLink href="/writing" decorationColor="teal">
            writing
          </IntroCardLink>{' '}
          as well, albeit not as consistently, but I’m working on being better
          at that.
        </h1>
      </div>
    </motion.div>
  );
}
