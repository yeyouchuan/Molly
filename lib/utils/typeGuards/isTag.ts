import { TailwindColor, tailwindColors } from '@/lib/tailwind.types';

export type Tag = {
  color: TailwindColor;
  label: string;
};

export function isTag(obj: unknown): obj is Tag {
  if (typeof obj !== 'object' || !obj) {
    return false;
  }

  const castedObj: Partial<Tag> = obj;

  return (
    typeof castedObj.color === 'string' &&
    tailwindColors.includes(castedObj.color) &&
    typeof castedObj.label === 'string'
  );
}
