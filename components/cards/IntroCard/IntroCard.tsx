import { IntroCardLink } from './IntroCardLink';

export function IntroCard() {
  return (
    <div className="col-span-2 row-span-2 aspect-square px-1 pb-2">
      <div className="h-full w-full p-8">
        <h1 className="font-serif-variation font-serif text-3xl font-light leading-tight text-neutral-400 lg:text-4xl">
          Hello I’m <span className="text-neutral-900">Chester</span> 👋&nbsp;
          Welcome to my digital garden 🌱 I like building{' '}
          <IntroCardLink href="/projects">things</IntroCardLink>, and I’m
          currently helping to build{' '}
          <IntroCardLink external href="https://mobbin.com">
            Mobbin
          </IntroCardLink>
          .
          <br />
          <br />
          In my free time, I enjoy brewing{' '}
          <IntroCardLink href="/hobbies">coffee</IntroCardLink>, tending to my{' '}
          <IntroCardLink href="/hobbies">plants</IntroCardLink>, and&nbsp;
          <IntroCardLink href="/hobbies">climbing</IntroCardLink> (plastic)
          rocks.
          <br />
          <br />I do some <IntroCardLink href="/reading">
            reading
          </IntroCardLink>{' '}
          and <IntroCardLink href="/writing">writing</IntroCardLink> as well,
          albeit not as consistently, but I’m working on being better at that.
        </h1>
      </div>
    </div>
  );
}
