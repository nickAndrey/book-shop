import { Children, ReactNode } from 'react';
import styles from './ProductsGrid.module.scss';

type ProductsGridProps = {
  children: ReactNode;
};

export default function ProductsGrid({ children }: ProductsGridProps) {
  const childrenArray = Children.toArray(children);
  const chunks: ReactNode[][] = [];

  let chunk: ReactNode[] = [];
  let chunkIndex = 0;

  for (const child of childrenArray) {
    chunk.push(child);

    if (
      (chunk.length === 3 && chunkIndex % 2 === 0) ||
      (chunk.length === 2 && chunkIndex % 2 === 1)
    ) {
      chunks.push(chunk);
      chunk = [];
      chunkIndex++;
    }
  }

  if (chunk.length > 0) {
    chunks.push(chunk);
  }

  return (
    <div className={styles['products-grid']}>
      {chunks.map((chunk, index) => (
        <div key={index} className={styles['grid-row']}>
          {chunk}
        </div>
      ))}
    </div>
  );
}
