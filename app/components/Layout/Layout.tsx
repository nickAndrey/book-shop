import { ReactNode } from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header>header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
