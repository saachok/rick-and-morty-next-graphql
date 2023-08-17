import Link from 'next/link';

import styles from '../public/styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/characters">
            Characters
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/episodes">
            Episodes
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/locations">
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
