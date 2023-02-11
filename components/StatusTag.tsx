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
              return 'bg-orange-400/40 text-orange-900';
            case 'amber':
              return 'bg-amber-400/40 text-amber-900';
            case 'lime':
              return 'bg-lime-400/40 text-lime-900';
            case 'green':
              return 'bg-green-400/40 text-green-900';
            case 'sky':
              return 'bg-sky-400/40 text-sky-900';
            case 'indigo':
              return 'bg-indigo-400/40 text-indigo-900';
            case 'purple':
              return 'bg-purple-400/40 text-purple-900';
            case 'rose':
              return 'bg-rose-400/40 text-rose-900';
          }
        })(),
        'inline-block rounded px-1.5 pt-0.5 pb-1',
        'font-mono text-sm tracking-tight',
        'shadow-inset-skeuo'
      )}
    >
      <span>{props.status.toUpperCase()}</span>
    </div>
  );
}
