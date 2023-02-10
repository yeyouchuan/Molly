import classNames from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Link } from '@/lib/utils/type-guards/isLink';

import { Tooltip } from './Tooltip';

type CardHeaderProps = {
  type: string;
  label: string;
  link?: Link;
};

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
            <NextLink
              href={`/${props.type.toLowerCase()}`}
              className={classNames(
                'transition-colors',
                // State: focus
                'focus-visible:ring-4 focus-visible:ring-blue-200',
                'focus-visible:text-neutral-500 focus-visible:underline',
                // State: hover
                'hover:text-neutral-500 hover:underline'
              )}
            >
              {props.type}
            </NextLink>
          </Tooltip>
        )}
        &nbsp;·&nbsp;{props.label}
      </span>

      {props.link !== undefined && (
        <Tooltip content={props.link.tooltipLabel} side="left">
          <a
            href={props.link.url}
            target="_blank"
            rel="noreferrer"
            className={classNames(
              'flex h-8 w-8 items-center justify-center rounded-full transition-colors',
              // State: focus
              'focus-visible:ring-4 focus-visible:ring-blue-200',
              'group-focus-within:bg-white group-focus-within:text-neutral-900',
              'group-focus-within:shadow-skeuo',
              // State: hover
              'cursor-alias group-hover:bg-white group-hover:text-neutral-900',
              'group-hover:shadow-skeuo'
            )}
          >
            ↗
          </a>
        </Tooltip>
      )}
    </div>
  );
}
