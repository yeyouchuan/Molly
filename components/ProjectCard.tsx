import classNames from 'classnames';

type ProjectCardProps = {
  name: string;
  link: string;
  large?: boolean;
};

export function ProjectCard({ name, link, large = false }: ProjectCardProps) {
  return (
    <div
      className={classNames(
        large ? 'col-span-2 aspect-[2]' : 'aspect-square',
        'px-1 pb-2'
      )}
    >
      <div className="h-full w-full rounded-lg bg-stone-100 p-4">
        <div className="flex justify-between font-light -tracking-[0.03em] text-stone-500 antialiased">
          <span>Projects / {name}</span>
          <a href={link} target="_blank" rel="noreferrer">
            ↗
          </a>
        </div>
      </div>
    </div>
  );
}
