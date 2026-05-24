import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './About.module.css';

export default function About() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className={styles.heading}>{t.about.heading}</h2>
          <div className={styles.photoWrap}>
            <img
              src="/profile.png"
              alt={t.about.photoAlt}
              className={styles.photo}
              loading="lazy"
            />
          </div>

          <div className={styles.noteWrap}>
            <button
              type="button"
              className={styles.noteToggle}
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="about-note"
            >
              <span>{t.about.personalNote}</span>
              <span
                className={`${styles.noteIcon}${open ? ` ${styles.noteIconOpen}` : ''}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id="about-note"
              className={`${styles.noteBody}${open ? ` ${styles.noteBodyOpen}` : ''}`}
            >
              <blockquote className={styles.motto}>{t.about.motto}</blockquote>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.lead}>{t.about.lead}</p>
          <p>{t.about.paragraph2}</p>
          <p>{t.about.paragraph3}</p>

          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>{t.about.factCurrentlyLabel}</dt>
              <dd>{t.about.factCurrentlyValue}</dd>
            </div>
            <div className={styles.fact}>
              <dt>{t.about.factFocusLabel}</dt>
              <dd>{t.about.factFocusValue}</dd>
            </div>
            <div className={styles.fact}>
              <dt>{t.about.factStrengthsLabel}</dt>
              <dd>{t.about.factStrengthsValue}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
