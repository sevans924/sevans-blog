import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <h5>Built with Next.js.</h5>
      </div>
    </footer>
  );
};

export default Footer;
