type CardHeaderProps = {
  breadcrumbs: string;
  url: string;
};

export function CardHeader(props: CardHeaderProps) {
  return (
    <div className="flex justify-between p-4 text-sm tracking-tight text-neutral-400">
      <span>{props.breadcrumbs}</span>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer"
      >
        ↗
      </a>
    </div>
  );
}
