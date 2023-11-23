'use client';

import CrossIcon from '@/public/icons/cross.svg';
import BurgerIcon from '@/public/icons/menu-burger.svg';
import mergeClassNames from '@/utils/mergeClassNames';
import useOutsideClickHandler from '@/utils/useOutsideClickHandler';
import { useRef, useState } from 'react';
import styles from './NavigationMobile.module.scss';

const navigationLinks = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

type NavigationMobileProps = {};

export default function NavigationMobile({}: NavigationMobileProps) {
  const ref = useRef<HTMLElement>(null);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleToggleNavigation = () => {
    setIsNavigationOpen((isNavigationOpen) => !isNavigationOpen);
  };

  useOutsideClickHandler(ref, () => setIsNavigationOpen(false));

  return (
    <nav className={styles['navigation-container']} ref={ref}>
      <button
        type="button"
        className={styles['toggle-navigation-button']}
        onClick={handleToggleNavigation}
      >
        {isNavigationOpen ? <CrossIcon /> : <BurgerIcon />}
      </button>

      <span className={styles['shop-name']}>bookshop</span>

      <ul
        className={mergeClassNames([
          styles['navigation-list'],
          isNavigationOpen ? styles['navigation-list--open'] : '',
        ])}
      >
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={styles['navigation-item']}
              onClick={() => setIsNavigationOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
