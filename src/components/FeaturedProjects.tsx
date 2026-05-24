import { useState } from 'react';
import type { Project } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocalizedProjects } from '../i18n/useLocalizedProjects';
import ProjectDetailModal from './ProjectDetailModal';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { t } = useLanguage();
  const projects = useLocalizedProjects();
  const active = activeId
    ? projects.find((p) => p.id === activeId) ?? null
    : null;

  return (
    <section id="projects" className={`section ${styles.wrap}`}>
      <div className="container">
        <header className={styles.header}>
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <h2 className={styles.title}>{t.projects.title}</h2>
          <p className={styles.sub}>{t.projects.sub}</p>
        </header>

        <ul className={styles.grid}>
          {projects.map((p) => (
            <li key={p.id}>
              <ProjectCard project={p} onOpen={() => setActiveId(p.id)} />
            </li>
          ))}
        </ul>
      </div>

      <ProjectDetailModal
        project={active}
        onClose={() => setActiveId(null)}
      />
    </section>
  );
}

interface CardProps {
  project: Project;
  onOpen: () => void;
}

function ProjectCard({ project, onOpen }: CardProps) {
  const { t } = useLanguage();
  const [c1, c2] = project.coverGradient ?? ['#f5efde', '#d8b86a'];
  const coverStyle = project.coverImage
    ? { backgroundImage: `url(${project.coverImage})` }
    : { background: `linear-gradient(135deg, ${c1}, ${c2})` };

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.cover}
        style={coverStyle}
        onClick={onOpen}
        aria-label={`${t.projects.cardOpenAria}: ${project.title}`}
      >
        <span className={styles.coverYear}>{project.year}</span>
        <span className={styles.coverType}>{project.type}</span>
      </button>

      <div className={styles.body}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.blurb}>{project.blurb}</p>

        <dl className={styles.meta}>
          <div>
            <dt>{t.projects.cardToolsLabel}</dt>
            <dd>{project.tools.join(' · ')}</dd>
          </div>
          <div>
            <dt>{t.projects.cardRoleLabel}</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <button type="button" className={styles.viewBtn} onClick={onOpen}>
          {t.projects.cardViewDetails} <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
