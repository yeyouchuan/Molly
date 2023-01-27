import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = {
  path: string;
  children: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function NavLink(props: NavLinkProps) {
  const { path, children, ...anchorProps } = props;
  const router = useRouter();

  return (
    <Link
      href={path}
      className={classNames(
        'rounded py-1 px-2 transition-colors hover:text-neutral-900',
        router.asPath === path ? 'text-neutral-900' : 'text-neutral-500'
      )}
      {...anchorProps}
    >
      {children}
    </Link>
  );
}
