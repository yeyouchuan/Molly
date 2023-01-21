import { ReadingProperties } from '@/lib/utils/isReadingProperties';

import { CardHeader } from './CardHeader';

type ReadingCardProps = ReadingProperties;

export function ReadingCard(props: ReadingCardProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <CardHeader breadcrumbs={`Reading / ${props.type}`} url={props.url} />

      <div className="grid grow grid-cols-2 items-end gap-6 px-7 pb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.imageUrl}
          alt={props.title}
          className="rounded shadow-lg"
        />

        <div className=" -tracking-[0.03em]">
          <div className="mb-3 inline-block rounded bg-amber-400/40 px-2 text-sm font-light">
            <span>{props.status}</span>
          </div>
          <h3>{props.title}</h3>
          <span className="text-stone-500">{props.author}</span>
        </div>
      </div>
    </div>
  );
}
