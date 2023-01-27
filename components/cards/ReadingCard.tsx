import { ReadingProperties } from '@/lib/utils/isReadingProperties';

import { CardHeader } from '../CardHeader';
import { StatusTag } from '../StatusTag';

type ReadingCardProps = ReadingProperties;

export function ReadingCard(props: ReadingCardProps) {
  return (
    <div className="isolate flex h-full w-full flex-col">
      <CardHeader
        type="Reading"
        label={props.type}
        url={props.url}
        urlTooltipLabel="View on Goodreads"
      />

      <div className="grid grow grid-cols-2 items-end gap-6 px-7 pb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.imageUrl}
          alt={props.title}
          className="rounded shadow-lg transition-transform group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-xl"
        />

        <div className="-tracking-[0.03em]">
          <StatusTag status={props.status} color="amber" />
          <h3 className="mt-3 line-clamp-3">{props.title}</h3>
          <span className="text-neutral-400">{props.author}</span>
        </div>
      </div>
    </div>
  );
}
