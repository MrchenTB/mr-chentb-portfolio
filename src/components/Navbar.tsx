import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/LanguageContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when a link is clicked or viewport widens.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 760 && open) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Primary"
    >
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Home">
          <span className={styles.brandMark}>◆</span>
          <span className={styles.brandText}>Mr.ChenTB</span>
        </a>

        <nav className={styles.links} aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta}>
            {t.nav.cta}
          </a>
          <LangSwitch
            language={language}
            setLanguage={setLanguage}
            ariaLabel={t.nav.langLabel}
            enLabel={t.nav.en}
            zhLabel={t.nav.zh}
          />
        </nav>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
        </button>
      </div>

      <div
        className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}
        aria-hidden={!open}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <LangSwitch
          language={language}
          setLanguage={setLanguage}
          ariaLabel={t.nav.langLabel}
          enLabel={t.nav.en}
          zhLabel={t.nav.zh}
        />
      </div>
    </header>
  );
}

interface LangSwitchProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  ariaLabel: string;
  enLabel: string;
  zhLabel: string;
}

function LangSwitch({
  language,
  setLanguage,
  ariaLabel,
  enLabel,
  zhLabel,
}: LangSwitchProps) {
  return (
    <div className={styles.langSwitch} role="group" aria-label={ariaLabel}>
      <button
        type="button"
        className={`${styles.langBtn} ${language === 'zh' ? styles.langBtnActive : ''}`}
        aria-pressed={language === 'zh'}
        onClick={() => setLanguage('zh')}
      >
        {zhLabel}
      </button>
      <button
        type="button"
        className={`${styles.langBtn} ${language === 'en' ? styles.langBtnActive : ''}`}
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        {enLabel}
      </button>
    </div>
  );
}
