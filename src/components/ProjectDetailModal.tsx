import { useEffect, useRef } from 'react';
import type { Project } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import AiCupDetail from './AiCupDetail';
import FresiqDetail from './FresiqDetail';
import SasDetail from './SasDetail';
import TableauDetail from './TableauDetail';
import styles from './ProjectDetailModal.module.css';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    // focus the dialog for screen readers / esc handling
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;
  const d = project.detail;
  const [c1, c2] = project.coverGradient ?? ['#f5efde', '#d8b86a'];
  const coverStyle = project.coverImage
    ? {
        backgroundImage: `url(${project.coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { background: `linear-gradient(135deg, ${c1}, ${c2})` };

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        tabIndex={-1}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label={t.modal.close}
        >
          ×
        </button>

        <header
          className={styles.cover}
          style={coverStyle}
        >
          <span className={styles.year}>{project.year}</span>
          <span className={styles.type}>{project.type}</span>
        </header>

        <div className={styles.body}>
          <span className="eyebrow">{t.modal.caseStudy}</span>
          <h2 id="project-title" className={styles.title}>
            {project.title}
          </h2>
          <p className={styles.lead}>{project.blurb}</p>

          <dl className={styles.facts}>
            <div>
              <dt>{t.modal.role}</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>{t.modal.tools}</dt>
              <dd>{project.tools.join(' · ')}</dd>
            </div>
            <div>
              <dt>{t.modal.year}</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>{t.modal.type}</dt>
              <dd>{project.type}</dd>
            </div>
          </dl>

          {project.id === 'ai-cup-table-tennis' ? (
            <AiCupDetail project={project} />
          ) : project.id === 'fresiq-smart-food-box' ? (
            <FresiqDetail project={project} />
          ) : project.id === 'sas-customer-churn-prediction' ? (
            <SasDetail project={project} />
          ) : project.id === 'tableau-sales-customer-dashboard' ? (
            <TableauDetail project={project} />
          ) : (
            <>
              <Block heading={t.modal.projectOverview} body={d.overview} />
              <Block heading={t.modal.goal} body={d.goal} />
              <Block heading={t.modal.myRole} body={d.role} />

              <section className={styles.block}>
                <h3 className={styles.h3}>{t.modal.process}</h3>
                <ol className={styles.steps}>
                  {d.process.map((step, i) => (
                    <li key={i}>
                      <span className={styles.stepNum}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <Block heading={t.modal.challenges} body={d.challenges} />
              <Block heading={t.modal.solution} body={d.solution} />
              <Block heading={t.modal.outcome} body={d.outcome} />
              <Block heading={t.modal.reflection} body={d.reflection} />

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubBtn}
                >
                  {t.modal.viewGithub}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Block({ heading, body }: { heading: string; body: string }) {
  return (
    <section className={styles.block}>
      <h3 className={styles.h3}>{heading}</h3>
      <p className={styles.p}>{body}</p>
    </section>
  );
}
