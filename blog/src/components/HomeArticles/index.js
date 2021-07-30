import Link from 'next/link';
import Image from 'next/image';
import styles from './homeArticles.module.scss';
import { motion } from 'framer-motion';
import { GraphCMSImageLoader } from '../../utils/graphcms-loader';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  initial: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  animate: {
    delay: 3,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.35,
      duration: 0.35,
      ease: easing,
    },
  },
};

const HomeArticles = ({ posts }) => {
  return (
    <section className={styles['homeArticles']}>
      <motion.div variants={stagger} className={styles['homeArticles__grid']}>
        {posts.map(
          ({ author, title, category, slug, featuredImage, excerpt }) => (
            <motion.article
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              className={styles['homeArticles__gridItem']}
              key={slug}
            >
              <Link href={`/${category.slug}/${slug}`}>
                <a>
                  <div className={styles['homeArticles__imgWrapper']}>
                    <Image
                      loader={GraphCMSImageLoader}
                      className={styles[`homeArticles__img`]}
                      src={featuredImage.url}
                      alt={title}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                  <div className={styles[`homeArticles__itemDetails`]}>
                    <div className={styles[`homeArticles__itemDetailsInner`]}>
                      <span className={styles['homeArticles__itemCategory']}>
                        {category.name}
                      </span>

                      <h2 className={styles['homeArticles__itemTitle']}>
                        {title}
                      </h2>
                      <span className={styles['homeArticles__itemAuthor']}>
                        Written by: {author.name}
                      </span>
                      <p className={styles['homeArticles__itemExcerpt']}>
                        {excerpt}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </motion.article>
          )
        )}
      </motion.div>
    </section>
  );
};

export default HomeArticles;
