import Link from 'next/link';

type IntroCardLinkProps = {
  external?: boolean;
  children: string;
  href: string;
};

export function IntroCardLink(props: IntroCardLinkProps) {
  // External link
  if (props.external === true) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className="cursor-alias text-neutral-900  decoration-wavy hover:underline"
      >
        {props.children}
      </a>
    );
  }

  // Internal link
  return (
    <Link href={props.href} className="text-neutral-900 hover:underline">
      {props.children}
    </Link>
  );
}
