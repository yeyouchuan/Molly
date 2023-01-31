import classNames from 'classnames';
import Link from 'next/link';

type IntroCardLinkProps = {
  external?: boolean;
  children: string;
  href: string;
  decorationColor:
    | 'orange'
    | 'lime'
    | 'teal'
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
      case 'teal':
        return 'decoration-teal-400';
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
        'rounded text-neutral-900 underline-offset-4',
        getTailwindColor(),
        // State: focus
        'focus-visible:ring-4 focus-visible:ring-blue-200',
        'focus:underline',
        // State: hover
        'hover:underline'
      )}
    >
      {props.children}
    </Link>
  );
}
