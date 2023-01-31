export function cardImageSizes(large?: boolean) {
  return large === true
    ? `(min-width: 1280px) 50vw,
      (min-width: 1024px) 66vw,
      100vw`
    : `(min-width: 1280px) 25vw,
      (min-width: 1024px) 33vw,
      (min-width: 640px) 50vw,
      100vw`;
}
