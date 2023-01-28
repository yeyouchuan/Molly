import classNames from 'classnames';

type NavLinkProps = {
  href: string;
  children: string;
};

export function NavLink(props: NavLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={classNames(
        ' py-1 px-2 text-sm text-neutral-400',
        // Text decoration
        'decoration-wavy underline-offset-4',
        // State: hover
        'cursor-alias transition-colors hover:text-neutral-900 hover:underline'
      )}
    >
      {props.children}
    </a>
  );
}
