import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Tooltip } from './Tooltip';

type CardHeaderProps = {
  type: string;
  label: string;
} & (
  | {
      url: string;
      urlTooltipLabel: string;
    }
  | {
      url?: never;
      urlTooltipLabel?: never;
    }
);

export function CardHeader(props: CardHeaderProps) {
  const router = useRouter();
  const pathname = router.query.type;

  return (
    <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
      <span className="py-1.5">
        {pathname === props.type.toLowerCase() ? (
          props.type
        ) : (
          <Tooltip content={`Browse ${props.type.toLowerCase()}`} side="bottom">
            <Link
              href={`/${props.type.toLowerCase()}`}
              className="transition-colors hover:text-neutral-500 hover:underline"
            >
              {props.type}
            </Link>
          </Tooltip>
        )}
        &nbsp;·&nbsp;{props.label}
      </span>

      {typeof props.url === 'string' && (
        <Tooltip content={props.urlTooltipLabel} side="left">
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className={classNames(
              'flex h-8 w-8 items-center justify-center rounded-full',
              // State: hover
              'cursor-alias transition-colors group-hover:bg-white group-hover:text-neutral-900'
            )}
          >
            ↗
          </a>
        </Tooltip>
      )}
    </div>
  );
}
