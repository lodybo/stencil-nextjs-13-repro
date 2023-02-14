import styles from './Header.module.css';
import Link from 'next/link';

export default () => (
  <ul className={styles.header}>
    <li>
      <Link href="/pages">`pages` dir</Link>
    </li>
    <li>
      <Link href="/">`app` dir</Link>
    </li>
  </ul>
);
