import styles from './Footer.module.scss';

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return <footer className={styles['footer']}>Footer</footer>;
}
