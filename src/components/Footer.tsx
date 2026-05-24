import { useLanguage } from '../i18n/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.mark}>◆</span>
          <span>
            © {new Date().getFullYear()} Zhao-Xuan Chen. {t.footer.copyright}
          </span>
        </div>
        <div className={styles.right}>
          <span>{t.footer.tagline}</span>
          <a href="#top" className={styles.back}>
            {t.footer.backToTop} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
