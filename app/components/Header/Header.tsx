import styles from './Header.module.scss';
import NavigationMobile from './NavigationMobile/NavigationMobile';

export default function Header() {
  return (
    <header className={styles['header-container']}>
      <NavigationMobile />
    </header>
  );
}
