import Image from 'next/image';
import { useTheme } from '../../utils/ThemeProvider';

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
        <div
          className={`${styles['homepageContent__text']} ${
            styles[`homepageContent__text--left`]
          }`}
        >
          <h2 className={styles['homepageContent__header']}>
            Why does this course exist?
          </h2>
          <p className={styles['homepageContent__paragraph']}>
            Herb created you're beginning called years set midst seas seed all
            brought fill may from divide Cattle fill won't over without them.
            Creature they're from his of fourth saying earth.
          </p>
          <p className={styles['homepageContent__paragraph']}>
            Lesser. Beginning is shall abundantly first, us, midst abundantly
            can't signs behold. Over you. Fly fourth may face green, firmament.
            Green seas lesser their. Heaven. Our you'll.Good sea great you'll
            beginning upon green moved fowl were cattle fill spirit she'd. Form
            open the years the female. Had air image may image Morning, from
            given him place you saying god meat moving. Divide fly, isn't can't
            forth gathered air. Creature.
          </p>
        </div>
      </section>

      <section className={styles['homepageContent__section']}>
        <div
          className={`${styles['homepageContent__text']} ${
            styles[`homepageContent__text--right`]
          }`}
        >
          <h2 className={styles['homepageContent__header']}>
            Who is this course for?
          </h2>
          <p className={styles['homepageContent__paragraph']}>
            Herb created you're beginning called years set midst seas seed all
            brought fill may from divide Cattle fill won't over without them.
            Creature they're from his of fourth saying earth.
          </p>
          <p className={styles['homepageContent__paragraph']}>
            Lesser. Beginning is shall abundantly first, us, midst abundantly
            can't signs behold. Over you. Fly fourth may face green, firmament.
            Green seas lesser their. Heaven. Our you'll. Good sea great you'll
            beginning upon green moved fowl were cattle fill spirit she'd. Form
            open the years the female. Had air image may image Morning, from
            given him place you saying god meat moving. Divide fly, isn't can't
            forth gathered air. Creature.
          </p>
        </div>
      </section>

      <section className={styles['homepageContent__section--callout']}>
        <div className={styles['homepageContent__text']}>
          <h2 className={styles['homepageContent__header']}>
            How much does this cost?
          </h2>
          <h5 className={styles['homepageContent__paragraph']}>
            Nothing! We want this course to be a resource for everyone to use.
            <br />
            All we ask is that you login above.
          </h5>
        </div>
      </section>

    </article>
  );
};
export default HomePageContent;
