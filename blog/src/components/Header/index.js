import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../../utils/ThemeProvider';

import styles from './header.module.scss';

const Header = () => {
  const { pathname } = useRouter();
  const { theme } = useTheme();


  return (
    <header
      className={`${styles['header']} ${
        theme === 'DEFAULT' ? styles['header--default'] : styles['header--dark']
      }`}
    >
      <div className={styles['header__grid']}>
        <div className={styles['header__title']}>
          <Link href='/'>
            <a className={styles['header__title-link']}>Sarah Evans</a>
          </Link>
        </div>
        <nav className={styles.header__nav}>
          <Link href='/blog'>
            <a className={styles['header__navlink']}>Blog</a>
          </Link>
          <Link href='/portfolio'>
            <a className={styles['header__navlink']}>Portfolio</a>
          </Link>
          <Link href='/about'>
            <a className={styles['header__navlink']}>About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
