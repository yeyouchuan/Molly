import classNames from 'classnames';

type StatusTagProps = {
  status: string;
  color: 'amber' | 'orange';
};

export function StatusTag(props: StatusTagProps) {
  return (
    <div
      className={classNames(
        (() => {
          switch (props.color) {
            case 'amber':
              return 'bg-amber-400/40';
            case 'orange':
              return 'bg-orange-400/40';
          }
        })(),
        'inline-block rounded px-2 text-sm text-neutral-900/75'
      )}
    >
      <span>{props.status}</span>
    </div>
  );
}
