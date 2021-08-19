import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './header.module.scss';

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linkVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      X: { stiffness: 50, velocity: 2 },
      y: { stiffness: 50, velocity: 2 },
    },
  },
  closed: {
    x: -15,
    opacity: 0,
    transition: {
      y: { stiffness: 50 },
      X: { stiffness: 50 },
    },
  },
};

const Header = ({ categoryList = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className={styles['header']}
      animate={open ? 'open' : 'closed'}
    >
      <div className={styles['header__wrapper']}>
        <div className={styles['header__itemLeft']}>
          <button
            aria-label='Toggle Menu'
            className={styles['header__menuBtn']}
            onClick={() => setOpen(!open)}
          >
            <svg width='40' height='40' viewBox='0 0 20 20'>
              <motion.path
                fill='transparent'
                strokeWidth='3'
                stroke='#ffffff'
                strokeLinecap='round'
                variants={{
                  closed: { d: 'M 2 2.5 L 18 2.5' },
                  open: { d: 'M 3 16.5 L 17 2.5' },
                }}
              />
              <motion.path
                fill='transparent'
                strokeWidth='3'
                stroke='#ffffff'
                strokeLinecap='round'
                d='M 2 9.423 L 18 9.423'
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                fill='transparent'
                strokeWidth='3'
                stroke='#ffffff'
                strokeLinecap='round'
                variants={{
                  closed: { d: 'M 2 16.346 L 18 16.346' },
                  open: { d: 'M 3 2.5 L 17 16.346' },
                }}
              />
            </svg>
          </button>
        </div>

        <div className={styles['header__itemCenter']}>
          <Link href='/'>
            <a className={styles['header__title']}>sarah evans.</a>
          </Link>
        </div>
      </div>

      <div
        className={`${styles['header__menu']} ${
          open ? styles['header__menu--open'] : styles['header__menu--closed']
        }`}
      >
        <motion.nav className={styles['header__nav']} variants={menuVariants}>
          {categoryList.map(({ slug, name }) => (
            <Link key={slug} href={`/${slug}`}>
              <motion.a
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={styles['header__navlink']}
                onClick={() => setOpen(false)}
              >
                {name}
              </motion.a>
            </Link>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
};
export default Header;

// CSS
// @use '../../styles/theme';

// $headerSize: 150px;

// .header {
//   background-color: theme.$color-200;
//   height: $headerSize;
//   position: sticky;
//   z-index: 9999;
//   top: 0;
//   display: flex;
//   align-items: center;
//   &__wrapper {
//     @include theme.wrap-section;
//     display: flex;
//     align-items: stretch;
//   }

//   &__itemCenter {
//     flex: 0 35%;
//     display: flex;
//     align-items: center;
//   }

//   &__menuBtn {
//     margin-top: 20px;
//     background-color: transparent;
//     border: none;
//     padding: 0;
//   }

//   &__itemLeft {
//     flex-direction: row;
//     text-align: center;
//     margin-left: auto;
//     @include theme.lg() {
//       margin-left: unset;
//       margin-right: auto;
//       flex-direction: row;
//     }
//   }

//   &__title {
//     font-family: theme.$logo-font;
//     color: theme.$primary;
//     font-size: clamp(3rem, 5.2vw, 8rem);
//     transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);

//     &:hover,
//     &:focus,
//     &:active {
//       color: theme.$highlight;
//       color: theme.$highlight;
//     }
//   }

//   &__menu {
//     position: fixed;
//     width: 100vw;
//     height: 100vh;
//     max-height: calc(100vh - #{$headerSize});

//     max-height: 100vh;
//     overflow: scroll;
//     top: $headerSize;
//     z-index: 9998;
//     transition: all 0.75s cubic-bezier(0.86, 0, 0.07, 1);
//     background-color: theme.$color-200;

//     &--closed {
//       left: -100vw;
//       transition-delay: 1s;
//     }

//     &--open {
//       left: 0;
//     }
//   }
//   h2 {
//     @include theme.wrap-section;
//     text-align: center;
//     color: theme.$primary;
//   }
//   &__nav {
//     @include theme.wrap-section;
//     padding: 24px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     color: theme.$primary;
//     max-height: calc(100vh - #{$headerSize});
//     overflow: auto;
//     scrollbar-width: none;
//     &::-webkit-scrollbar {
//       display: none;
//     }
//   }

//   &__navlink {
//     padding: 12px;
//     font-size: theme.$header4;
//     font-family: theme.$header-font;
//     color: theme.$primary;
//     transition: all 0.5s cubic-bezier(1, 0.1, 0.1, 1);
//     cursor: pointer;
//     background-image: linear-gradient(
//       to bottom,
//       theme.$highlight 0%,
//       theme.$highlight 100%
//     );
//     background-repeat: no-repeat;
//     background-position: 0 0;
//     background-size: 0 100%;
//     &:hover,
//     &:focus,
//     &:active {
//       background-size: 100% 100%;
//       color: theme.$primary;
//     }
//   }
// }
