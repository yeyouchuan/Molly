import Image from 'next/image';

type ProjectCardProps = {
  name: string;
  url: string;
  imageUrl: string;
};

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="group relative h-full w-full">
      <Image
        src={props.imageUrl}
        alt={props.name}
        fill
        className="object-contain !top-14"
      />
      <div className="flex justify-between p-4 font-light -tracking-[0.03em] text-stone-500  antialiased">
        <span>Projects / {props.name}</span>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          ↗
        </a>
      </div>
    </div>
  );
}
