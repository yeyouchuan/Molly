import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

import { Card } from '@/components/Card';
import { supabase } from '@/lib/supabaseClient';

export default function TypePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      {props.cards?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const type = context.params?.type;

  // Guard: type is undefined.
  if (type === undefined) {
    return {
      notFound: true,
    };
  }

  const { data: cards } = await supabase
    .from('cards')
    .select('*')
    .ilike('type', `%${type}%`)
    .order('updated_at', { ascending: false });

  return {
    props: {
      cards,
    },
  };
}
