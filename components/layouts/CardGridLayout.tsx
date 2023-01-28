import { PropsWithChildren } from 'react';

export function CardGridLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
}
