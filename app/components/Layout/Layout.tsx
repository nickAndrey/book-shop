import { ReactNode } from 'react';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <Carousel />
      <main className={styles['main-container']}>{children}</main>
      <Footer />
    </div>
  );
}
