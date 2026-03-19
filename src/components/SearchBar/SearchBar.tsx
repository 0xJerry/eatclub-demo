'use client';

import styles from './SearchBar.module.css';

interface Props {
  query: string;
  onQueryChange: (query: string) => void;
}

export default function SearchBar({ query, onQueryChange }: Props) {
  return (
    <div className={styles.searchBarContainer}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        placeholder="e.g. chinese, pizza"
        value={query}
        onChange={e => onQueryChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}
