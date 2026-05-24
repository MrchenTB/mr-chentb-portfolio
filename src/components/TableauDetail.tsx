import { Fragment, useState } from 'react';
import type { Project } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './TableauDetail.module.css';

interface Props {
  project: Project;
}

function ImageCard({
  src,
  alt,
  caption,
  category,
  variant,
}: {
  src: string;
  alt: string;
  caption: string;
  category?: string;
  variant: 'prototype' | 'dashboard';
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  const wrapClass =
    variant === 'dashboard' ? styles.dashboardImgWrap : styles.prototypeImgWrap;
  const imgClass =
    variant === 'dashboard' ? styles.dashboardImg : styles.prototypeImg;
  const figClass =
    variant === 'dashboard' ? styles.dashboardFigure : styles.prototypeFigure;
  return (
    <figure className={figClass}>
      <div className={wrapClass}>
        {category && <span className={styles.imgBadge}>{category}</span>}
        <img
          src={src}
          alt={alt}
          className={imgClass}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </div>
      <figcaption className={styles.imgCaption}>{caption}</figcaption>
    </figure>
  );
}

export default function TableauDetail({ project }: Props) {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Project Summary ── */}
      {project.summary && (
        <section className={styles.section}>
          <p className={styles.summary}>{project.summary}</p>
        </section>
      )}

      {/* ── User Story Context ── */}
      {project.userStoryContext && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.userStoryContext}</h3>
          <div className={styles.noteCard}>
            <span className={styles.noteEyebrow}>{t.detail.businessRequirements}</span>
            <p className={styles.noteText}>{project.userStoryContext}</p>
          </div>
        </section>
      )}

      {/* ── Case Metrics ── */}
      {project.caseMetrics && project.caseMetrics.length > 0 && (
        <section className={styles.section}>
          <div className={styles.metricsGrid}>
            {project.caseMetrics.map((m) => (
              <div key={m.label} className={styles.metricCard}>
                <span className={styles.metricLabel}>{m.label}</span>
                <span className={styles.metricValue}>{m.value}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── User Story Breakdown ── */}
      {project.userStoryCards && project.userStoryCards.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.userStoryBreakdown}</h3>
          <div className={styles.storyGrid}>
            {project.userStoryCards.map((card) => (
              <div key={card.title} className={styles.storyCard}>
                <span className={styles.storyTitle}>{card.title}</span>
                <p className={styles.storyDesc}>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Design Process ── */}
      {project.designProcess && project.designProcess.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.designProcess}</h3>
          <div className={styles.processFlow}>
            {project.designProcess.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && (
                  <span className={styles.processArrow} aria-hidden="true">
                    →
                  </span>
                )}
                <div className={styles.processStep}>
                  <span className={styles.processNum}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.processTitle}>{step.title}</span>
                  <p className={styles.processDesc}>{step.description}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
      )}

      {/* ── Prototype Planning ── */}
      {project.prototypeImages && project.prototypeImages.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.prototypePlanning}</h3>
          <div className={styles.prototypeGrid}>
            {project.prototypeImages.map((img) => (
              <ImageCard
                key={img.src}
                src={img.src}
                alt={img.alt}
                caption={img.caption}
                category={img.category}
                variant="prototype"
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Final Tableau Dashboard ── */}
      {project.dashboardImages && project.dashboardImages.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.finalDashboard}</h3>
          <div className={styles.dashboardStack}>
            {project.dashboardImages.map((img) => (
              <ImageCard
                key={img.src}
                src={img.src}
                alt={img.alt}
                caption={img.caption}
                category={img.category}
                variant="dashboard"
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Tableau Public Link ── */}
      {project.tableauLink && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.viewInteractiveDashboard}</h3>
          {project.tableauLinkDesc && (
            <p className={styles.bodyText}>{project.tableauLinkDesc}</p>
          )}
          <a
            href={project.tableauLink}
            target="_blank"
            rel="noreferrer"
            className={styles.tableauBtn}
          >
            {t.detail.openTableau}
            <span aria-hidden="true">→</span>
          </a>
        </section>
      )}

      {/* ── Outcome ── */}
      {project.outcomeText && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.modal.outcome}</h3>
          <div className={styles.noteCard}>
            <p className={styles.noteText}>{project.outcomeText}</p>
          </div>
        </section>
      )}

      {/* ── Reflection ── */}
      {project.reflectionText && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.modal.reflection}</h3>
          <div className={styles.noteCard}>
            <p className={styles.reflectionText}>{project.reflectionText}</p>
          </div>
        </section>
      )}
    </>
  );
}
