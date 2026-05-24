import ParticleNetwork from './ParticleNetwork';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className={styles.hero} id="top">
      <ParticleNetwork className={styles.canvas} />
      <div className={styles.fade} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <span className={`eyebrow ${styles.eyebrow}`}>{t.hero.eyebrow}</span>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            {t.hero.titleLead}
            <em>{t.hero.titleName}</em>
          </span>
        </h1>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.primary}>
            {t.hero.primaryCta}
            <span aria-hidden="true">→</span>
          </a>
          <a href="#about" className={styles.secondary}>
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>
      <a href="#about" className={styles.scrollHint} aria-label={t.hero.scroll}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>{t.hero.scroll}</span>
      </a>
    </section>
  );
}
