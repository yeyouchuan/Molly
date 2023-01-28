import { InferGetStaticPropsType } from 'next';

import { Card } from '@/components/Card';
import { IntroCard } from '@/components/cards';
import { CardGridLayout } from '@/components/layouts/CardGridLayout';
import { supabase } from '@/lib/supabaseClient';

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <CardGridLayout>
      <IntroCard />

      {props.featured?.map(({ card }) =>
        card && !Array.isArray(card) ? <Card key={card.id} {...card} /> : null
      )}
    </CardGridLayout>
  );
}

export async function getStaticProps() {
  const { data: featured } = await supabase
    .from('featured')
    .select('ordering, card:cards(*)')
    .order('ordering');

  return {
    props: {
      featured,
    },
  };
}
