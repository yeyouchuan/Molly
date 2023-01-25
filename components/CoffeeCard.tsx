import { CoffeeProperties } from '@/lib/utils/isCoffeeProperties';

import { CardHeader } from './CardHeader';
import { StatusTag } from './StatusTag';

type CoffeeCardProps = CoffeeProperties;

export function CoffeeCard(props: CoffeeCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <CardHeader category="Coffee" subcategory={props.type} />

      <div className="p-5">
        <StatusTag status="Now brewing" color="orange" />
        <h3 className="font-serif-variation mt-3 mb-5 font-serif text-6xl font-light">
          {props.name}
        </h3>
        <p className="text-neutral-400">
          <span>{props.origin}</span>&nbsp;·&nbsp;<span>{props.roaster}</span>
        </p>
        <p className="text-neutral-700">{props.notes}</p>
      </div>
    </div>
  );
}
