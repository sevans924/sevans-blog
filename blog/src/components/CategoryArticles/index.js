import Link from 'next/link';
import Image from 'next/image';
import styles from './categoryArticles.module.scss';
import { motion } from 'framer-motion';
import { GraphCMSImageLoader } from '../../utils/graphcms-loader';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    delay: 5,
    transition: {
      staggerChildren: 5,
      delayChildren: 4,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
      ease: easing,
    },
  },
};

const CategoryArticles = ({ posts = [], categorySlug }) => {
  return (
    <section className={styles['categoryArticles']}>
      <motion.div
        transition={{
          staggerChildren: 5,
          delayChildren: 4,
        }}
        className={styles['categoryArticles__grid']}
      >
        {posts.length === 0 && <h3>No articles in this category!</h3>}

        {posts.map(({ author, title, slug, featuredImage, excerpt }) => (
          <article className={styles['categoryArticles__gridItem']} key={slug}>
            <Link href={`/${categorySlug}/${slug}`}>
              <div className={styles['categoryArticles__image']}>
                <Image
                  loader={GraphCMSImageLoader}
                  src={featuredImage.url}
                  alt={title}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
            </Link>
            <div className={styles['categoryArticles__details']}>
              <Link href={`/${categorySlug}/${slug}`}>
                <a>
                  <h3>{title}</h3>
                </a>
              </Link>
              <h4>Author: {author.name}</h4>
              <p>{excerpt}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
};

export default CategoryArticles;
