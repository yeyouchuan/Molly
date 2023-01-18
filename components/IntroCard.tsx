export function IntroCard() {
  return (
    <div className="col-span-2 row-span-2 aspect-square px-1 pb-2">
      <div className="h-full w-full p-8">
        <h1 className="font-serif-configured font-serif text-4xl font-extralight leading-tight -tracking-[0.03em] text-stone-500">
          Hello I’m <span className="text-black">Chester</span> 👋 Welcome to my
          digital garden 🌱 I like building things, and I’m currently helping to
          build <span className="text-black">Mobbin</span>.
          <br />
          <br />
          In my free time, I enjoy brewing{' '}
          <span className="text-black">coffee</span>, tending to my{' '}
          <span className="text-black">plants</span>, and&nbsp;
          <span className="text-black">climbing</span> (plastic) rocks.
          <br />
          <br />I do some <span className="text-black">reading</span> and{' '}
          <span className="text-black">writing</span> as well, albeit not as
          consistently, but I’m working on being better at that.
        </h1>
      </div>
    </div>
  );
}
