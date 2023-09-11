'use client';

import { useState } from 'react';

import Link from 'next/link';

import styles from '../public/styles/Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  window.addEventListener('scroll', () => setIsOpen(false));

  return (
    <nav className={styles.navbar}>
      <div className={styles['menu-btn']} onClick={handleToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className={styles.backdrop} onClick={handleToggleMenu}>
          <ul className={styles.menu}>
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
        </div>
      )}
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
