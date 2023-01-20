import classNames from 'classnames';

import { Database } from '@/lib/database.types';

type CardProps = Database['public']['Tables']['cards']['Row'];

export function Card({ type, large = false }: CardProps) {
  return (
    <div
      className={classNames(
        large ? 'col-span-2 aspect-[2]' : 'aspect-square',
        'px-1 pb-2'
      )}
    >
      <div className="h-full w-full rounded-lg bg-stone-100 p-4">{type}</div>
    </div>
  );
}
