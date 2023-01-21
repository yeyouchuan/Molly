type CardHeaderProps = {
  breadcrumbs: string;
  url: string;
};

export function CardHeader(props: CardHeaderProps) {
  return (
    <div className="flex justify-between p-4 font-light -tracking-[0.03em] text-stone-500">
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
