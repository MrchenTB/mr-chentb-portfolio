import { useLanguage } from '../i18n/LanguageContext';
import styles from './Skills.module.css';

interface SkillGroup {
  key: 'dataAi' | 'web' | 'business' | 'language';
  items: string[];
}

const groups: SkillGroup[] = [
  {
    key: 'dataAi',
    items: [
      'Python',
      'Numpy',
      'Matplotlib',
      'pandas',
      'scikit-learn',
      'Machine Learning',
      'SQL',
      'SAS Viya',
      'Tableau',
    ],
  },
  {
    key: 'web',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma', 'UI Prototyping'],
  },
  {
    key: 'business',
    items: [
      'Business Analysis',
      'Data Analysis',
      'Business Storytelling',
      'Project Management',
      'Customer Churn Analysis',
    ],
  },
  {
    key: 'language',
    items: ['Japanese N1', 'English TOEIC 810', 'Presentation', 'Team Collaboration'],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className={`section ${styles.wrap}`}>
      <div className="container">
        <header className={styles.header}>
          <span className="eyebrow">{t.skills.eyebrow}</span>
          <h2 className={styles.title}>{t.skills.title}</h2>
          <p className={styles.sub}>{t.skills.sub}</p>
        </header>

        <div className={styles.grid}>
          {groups.map((g) => {
            const group = t.skills.groups[g.key];
            return (
              <div key={g.key} className={styles.col}>
                <h3 className={styles.colTitle}>
                  <span className={styles.dot} />
                  {group.label}
                </h3>
                <p className={styles.colDesc}>{group.desc}</p>
                <ul className={styles.list}>
                  {g.items.map((item) => (
                    <li key={item} className={styles.chip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
