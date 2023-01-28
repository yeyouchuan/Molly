import classNames from 'classnames';
import Link from 'next/link';

type IntroCardLinkProps = {
  external?: boolean;
  children: string;
  href: string;
  decorationColor:
    | 'orange'
    | 'lime'
    | 'green'
    | 'sky'
    | 'purple'
    | 'fuchsia'
    | 'rose';
};

export function IntroCardLink(props: IntroCardLinkProps) {
  function getTailwindColor() {
    switch (props.decorationColor) {
      case 'orange':
        return 'decoration-orange-400';
      case 'lime':
        return 'decoration-lime-400';
      case 'green':
        return 'decoration-green-400';
      case 'sky':
        return 'decoration-sky-400';
      case 'purple':
        return 'decoration-purple-400';
      case 'fuchsia':
        return 'decoration-fuchsia-400';
      case 'rose':
        return 'decoration-rose-400';
    }
  }

  // External link
  if (props.external === true) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={classNames(
          'cursor-alias text-neutral-900 decoration-wavy underline-offset-4 hover:underline',
          getTailwindColor()
        )}
      >
        {props.children}
      </a>
    );
  }

  // Internal link
  return (
    <Link
      href={props.href}
      className={classNames(
        'text-neutral-900 underline-offset-4 hover:underline',
        getTailwindColor()
      )}
    >
      {props.children}
    </Link>
  );
}
