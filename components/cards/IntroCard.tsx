import Link from 'next/link';

export function IntroCard() {
  return (
    <div className="col-span-2 row-span-2 aspect-square px-1 pb-2">
      <div className="h-full w-full p-4">
        <h1 className="font-serif-variation font-serif text-3xl font-light leading-tight text-neutral-400 lg:text-4xl">
          Hello I’m <span className="text-neutral-900">Chester</span> 👋&nbsp;
          Welcome to my digital garden 🌱 I like building{' '}
          <Link href="/projects" className="text-neutral-900 hover:underline">
            things
          </Link>
          , and I’m currently helping to build{' '}
          <a
            href="https://mobbin.com"
            target="_blank"
            rel="noreferrer"
            className="cursor-alias text-neutral-900 hover:underline"
          >
            Mobbin
          </a>
          .
          <br />
          <br />
          In my free time, I enjoy brewing{' '}
          <Link href="/coffee" className="text-neutral-900 hover:underline">
            coffee
          </Link>
          , tending to my{' '}
          <Link href="/plants" className="text-neutral-900 hover:underline">
            plants
          </Link>
          , and&nbsp;
          <Link href="climbing" className="text-neutral-900 hover:underline">
            climbing
          </Link>{' '}
          (plastic) rocks.
          <br />
          <br />I do some{' '}
          <Link href="reading" className="text-neutral-900 hover:underline">
            reading
          </Link>{' '}
          and{' '}
          <Link href="writing" className="text-neutral-900 hover:underline">
            writing
          </Link>{' '}
          as well, albeit not as consistently, but I’m working on being better
          at that.
        </h1>
      </div>
    </div>
  );
}
