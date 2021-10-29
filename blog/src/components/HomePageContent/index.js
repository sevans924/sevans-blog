import Image from 'next/image';
import { useTheme } from '../../utils/ThemeProvider';

import Video from '../Video';
import styles from './homePageContent.module.scss';

const HomePageContent = () => {
  const { theme } = useTheme();

  return (
    <article
      className={`${styles['homepageContent']} ${
        theme === 'DEFAULT'
          ? styles['homepageContent--default']
          : styles['homepageContent--dark']
      }`}
    >
      <section className={styles['homepageContent__section']}>
      <div className={styles['homepageContent__imageWrapper']}>
          <Image
            src='/assets/images/rock-pic.png'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </section>

    </article>
  );
};
export default HomePageContent;
