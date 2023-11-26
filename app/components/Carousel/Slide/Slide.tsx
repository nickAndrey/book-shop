import { ReactNode } from 'react';
import styles from './Slide.module.scss';

type SlideProps = {
  children: ReactNode;
  headline?: string;
  subheadLine?: string;
};

export default function Slide({ children, headline, subheadLine }: SlideProps) {
  return (
    <div className={styles['slide-container']}>
      <div className={styles['slide-caption']}>
        <p className={styles['slide-headline']}>{headline}</p>
        <p className={styles['slide-subheadline']}>{subheadLine}</p>
      </div>

      {children}
    </div>
  );
}
