import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import styles from './singleArticleRelated.module.scss';
import Link from 'next/link';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const SingleArticleRelated = ({ posts }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const postIndex = wrap(0, posts.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <section className={styles['relatedPosts']}>
      <div className={styles['relatedPosts__wrapper']}>
        <AnimatePresence initial={false} custom={direction}>
          <Link
            href={`/${posts[postIndex].category.slug}/${posts[postIndex].slug}`}
            key={posts[postIndex].slug}
          >
            <motion.a
              key={page}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className={styles['relatedPosts__item']}
              style={{
                backgroundImage: `url(${posts[postIndex].featuredImage.url})`,
              }}
            >
              {posts[postIndex].title}
            </motion.a>
          </Link>
        </AnimatePresence>
        <div
          className={styles['relatedPosts__next']}
          onClick={() => paginate(1)}
        >
          &rarr;
        </div>
        <div
          className={styles['relatedPosts__prev']}
          onClick={() => paginate(-1)}
        >
          &larr;
        </div>
      </div>
    </section>
  );
};

export default SingleArticleRelated;
