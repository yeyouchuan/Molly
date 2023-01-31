import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export function CardGridLayout({ children }: PropsWithChildren) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      initial="hidden"
      animate="show"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
