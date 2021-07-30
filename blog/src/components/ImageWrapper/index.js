import Image from 'next/image';
import styles from './imageWrapper.module.scss';
import { GraphCMSImageLoader } from '../../utils/graphcms-loader';

const ImageWrapper = (props) => {
  return (
    <div className={styles['image']}>
      <div className={styles['image__wrapper']}>
        <Image
          loader={GraphCMSImageLoader}
          className={styles['image__media']}
          src={props.src}
          alt={props.alt || 'alt text'}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <div className={styles['image__caption']}>{props.alt}</div>
    </div>
  );
};

export default ImageWrapper;
