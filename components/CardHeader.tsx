import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Tooltip } from './Tooltip';

type CardHeaderProps = {
  category: string;
  subcategory: string;
  url?: string;
};

export function CardHeader(props: CardHeaderProps) {
  const router = useRouter();
  const pathname = router.query.type;

  return (
    <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
      <span className="py-1.5">
        {pathname === props.category.toLowerCase() ? (
          props.category
        ) : (
          <Tooltip
            content={`Browse ${props.category.toLowerCase()}`}
            side="bottom"
          >
            <Link
              href={`/${props.category.toLowerCase()}`}
              className="transition-colors hover:text-neutral-500 hover:underline"
            >
              {props.category}
            </Link>
          </Tooltip>
        )}
        &nbsp;·&nbsp;{props.subcategory}
      </span>

      {props.url !== undefined && (
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className={classNames(
            'flex h-8 w-8 items-center justify-center rounded-full',
            // State: hover
            'cursor-pointer transition-colors group-hover:bg-white group-hover:text-neutral-900'
          )}
        >
          ↗
        </a>
      )}
    </div>
  );
}
