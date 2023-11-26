import { ReactNode } from 'react';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Carousel />
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  );
}
