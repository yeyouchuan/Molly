import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = {
  type?: string;
  children: string;
};

export function NavLink(props: NavLinkProps) {
  const router = useRouter();
  const pathname = router.query.type;

  return (
    <Link
      href={`/${props.type ?? ''}`}
      className={classNames(
        'text-neutral-400 hover:underline',
        (pathname === props.type ?? '') && 'text-neutral-900 underline'
      )}
    >
      {props.children}
    </Link>
  );
}
