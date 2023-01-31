import classNames from 'classnames';

import { TailwindColor } from '@/lib/tailwind.types';

type StatusTagProps = {
  status: string;
  color: TailwindColor;
};

export function StatusTag(props: StatusTagProps) {
  return (
    <div
      className={classNames(
        (() => {
          switch (props.color) {
            case 'orange':
              return 'bg-orange-400/40';
            case 'amber':
              return 'bg-amber-400/40';
            case 'lime':
              return 'bg-lime-400/40';
            case 'green':
              return 'bg-green-400/40';
            case 'indigo':
              return 'bg-indigo-400/40';
            case 'rose':
              return 'bg-rose-400/40';
          }
        })(),
        'inline-block rounded px-2 text-sm text-neutral-900/75'
      )}
    >
      <span>{props.status}</span>
    </div>
  );
}
