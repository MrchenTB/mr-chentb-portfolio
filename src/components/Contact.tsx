import { useLanguage } from '../i18n/LanguageContext';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLanguage();
  const channels = [
    {
      label: t.contact.emailLabel,
      value: 'Mr.ChenTB@gmail.com',
      href: 'mailto:Mr.ChenTB@gmail.com',
    },
    {
      label: t.contact.githubLabel,
      value: 'github.com/MrchenTB',
      href: 'https://github.com/MrchenTB',
    },
    {
      label: t.contact.linkedinLabel,
      value: 'linkedin.com/in/mrchentb',
      href: 'https://www.linkedin.com/in/mrchentb',
    },
  ];

  return (
    <section id="contact" className={`section ${styles.wrap}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2 className={styles.title}>{t.contact.title}</h2>
            <p className={styles.sub}>{t.contact.sub}</p>
            <a className={styles.primary} href="mailto:Mr.ChenTB@gmail.com">
              {t.contact.primary} <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className={styles.channels}>
            {channels.map((c) => (
              <li key={c.label} className={styles.channel}>
                <a href={c.href} className={styles.channelLink}>
                  <span className={styles.channelLabel}>{c.label}</span>
                  <span className={styles.channelValue}>{c.value}</span>
                  <span className={styles.channelArrow} aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
