import BurgerIcon from '@/public/icons/menu-burger.svg';
import SearchIcon from '@/public/icons/search.svg';
import ShoppingBagIcon from '@/public/icons/shopping-bag.svg';
import Dropdown from './Dropdown/Dropdown';
import styles from './Header.module.scss';
import Search from './Search/Search';

const dropdownPanelItems = [
  {
    id: 'panel-1',
    className: styles['navigation-trigger'],
    component: (
      <>
        <BurgerIcon /> <b>bookshop</b>
      </>
    ),
    content: <div>Dropdown 1 content</div>,
  },
  {
    id: 'panel-2',
    className: styles['search-panel-trigger'],
    component: <SearchIcon />,
    content: <Search />,
  },
  {
    id: 'panel-3',
    component: <ShoppingBagIcon />,
    content: <div>Dropdown 3 content</div>,
  },
];

export default function Header() {
  return (
    <header className={styles['header-container']}>
      <Dropdown
        panelConfig={{
          panelClassName: styles['dropdown-panel'],
          items: dropdownPanelItems,
        }}
      />
    </header>
  );
}
