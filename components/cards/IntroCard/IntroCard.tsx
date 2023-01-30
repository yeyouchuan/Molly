import { IntroCardLink } from './IntroCardLink';

export function IntroCard() {
  return (
    <div className="row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square">
      <div className="h-full w-full p-4 sm:p-8">
        <h1 className="font-serif-variation font-serif text-2xl font-light !leading-tight text-neutral-400 sm:text-3xl lg:text-4xl">
          Hello I’m <span className="text-neutral-900">Chester</span> 👋&nbsp;
          Welcome to my digital garden 🌱 I like building{' '}
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
    </div>
  );
}
