import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './header.module.scss';

const navItems = [
  {
    slug: 'cv',
    name: 'CV',
  },
  {
    slug: 'portfolio',
    name: 'Portfolio',
  },
  {
    slug: 'blog',
    name: 'Blog',
  },
];
const Header = ({ categoryList = [] }) => {

  return (
<header className={styles['header']}>
  <div className={styles['header__wrapper']}>
        <div className={styles['header__itemCenter']}>
          <Link href='/'>
            <a className={styles['header__title']}>sarah evans.</a>
          </Link>
        </div>
        <nav className={styles['header__nav']}>
          {navItems.map(({ slug, name }) => (
            <Link key={slug} href={`/${slug}`}>
              <a className={styles['header__navlink']}>
                {name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;
