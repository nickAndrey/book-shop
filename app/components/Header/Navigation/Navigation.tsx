import Link from 'next/link';
import styles from './Navigation.module.scss';

const navigationLinksItems = [
  {
    id: 'link-1',
    className: styles['navigation-link'],
    content: 'Home',
    href: '/',
  },
  {
    id: 'link-2',
    className: styles['navigation-link'],
    content: 'About',
    href: '/about',
  },
  {
    id: 'link-3',
    className: styles['navigation-link'],
    content: 'Contact',
    href: '/contact',
  },
];

export default function Navigation() {
  return (
    <ul className={styles['navigation-list']}>
      {navigationLinksItems.map((item) => (
        <li key={item.id}>
          <Link href={item.href} className={item.className}>
            {item.content}
          </Link>
        </li>
      ))}
    </ul>
  );
}
