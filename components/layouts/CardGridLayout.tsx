import { PropsWithChildren } from 'react';

export function CardGridLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
}
