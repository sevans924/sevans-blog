import Image from 'next/image';
import styles from './categoryBanner.module.scss';
import { GraphCMSImageLoader } from '../../utils/graphcms-loader';

const CategoryBanner = ({ title, image }) => {
  return (
    <section className={styles['categoryBanner']}>
      <div className={styles['categoryBanner__wrapper']}>
        <Image
          loader={GraphCMSImageLoader}
          alt={title}
          src={image}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default CategoryBanner;
