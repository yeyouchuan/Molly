import { WritingProperties } from '@/lib/utils/isWritingProperties';

import { CardHeader } from './CardHeader';

type WritingCardProps = WritingProperties;

export function WritingCard(props: WritingCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <CardHeader breadcrumbs={`Writing / ${props.type}`} url={props.url} />

      <div className="p-5">
        <h3 className="font-serif-variation font-serif text-3xl font-light">
          {props.title}
        </h3>
        <span className="mt-2 mb-4 block font-light italic -tracking-[0.03em] text-stone-500">
          {props.publishedOn}
        </span>
        <p className="leading-relaxed text-stone-800 line-clamp-4">
          {props.contentPreview}
        </p>
      </div>
    </div>
  );
}
