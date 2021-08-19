import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__wrapper']}>
        <div className={styles['footer__itemInfo']}>
          <h4>sarah evans.</h4>
          <p>
            Welcome and thank you for checking out my site! 
          </p>
        </div>

        <small className={styles['footer__itemCopyright']}>
          {new Date().getFullYear()} sarah evans.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
