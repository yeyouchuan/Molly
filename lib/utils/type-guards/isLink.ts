export type Link = {
  url: string;
  tooltipLabel: string;
};

export function isLink(obj: unknown): obj is Link {
  if (typeof obj !== 'object' || !obj) {
    return false;
  }

  const castedObj: Partial<Link> = obj;

  return (
    typeof castedObj.url === 'string' &&
    typeof castedObj.tooltipLabel === 'string'
  );
}
