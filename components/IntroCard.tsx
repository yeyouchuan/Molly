export function IntroCard() {
  return (
    <div className="col-span-2 row-span-2 aspect-square px-1 pb-2">
      <div className="h-full w-full p-8">
        <h1 className="font-serif-variation font-serif text-4xl font-light leading-tight text-neutral-400">
          Hello I’m <span className="text-neutral-900">Chester</span> 👋&nbsp;
          Welcome to my digital garden 🌱 I like building things, and I’m
          currently helping to build{' '}
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
          <span className="text-neutral-900">coffee</span>, tending to my{' '}
          <span className="text-neutral-900">plants</span>, and&nbsp;
          <span className="text-neutral-900">climbing</span> (plastic) rocks.
          <br />
          <br />I do some <span className="text-neutral-900">
            reading
          </span> and <span className="text-neutral-900">writing</span> as well,
          albeit not as consistently, but I’m working on being better at that.
        </h1>
      </div>
    </div>
  );
}
