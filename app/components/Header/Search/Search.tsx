'use client';

import SearchIcon from '@/public/icons/search.svg';

import styles from './Search.module.scss';

type SearchProps = {};

export default function Search({}: SearchProps) {
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit} className={styles['search-form']}>
      <div className={styles['input-container']}>
        <input
          type="text"
          placeholder="Search for books"
          className={styles['search-input']}
        />

        <button type="submit" className={styles['button']}>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}
