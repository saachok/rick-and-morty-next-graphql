'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from '../public/styles/Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          src="/assets/rick-sanchez-icon.png"
          alt="Rick and Morty logo"
          width={40}
          height={40}
          className={styles.img}
        />
      </Link>
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
