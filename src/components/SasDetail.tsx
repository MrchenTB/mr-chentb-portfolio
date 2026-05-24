import { useState } from 'react';
import type { Project } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './SasDetail.module.css';

interface Props {
  project: Project;
}

function ScreenshotFigure({
  src,
  alt,
  caption,
  category,
}: {
  src: string;
  alt: string;
  caption: string;
  category?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className={styles.screenshotFigure}>
      <div className={styles.screenshotImgWrap}>
        {category && <span className={styles.screenshotBadge}>{category}</span>}
        <img
          src={src}
          alt={alt}
          className={styles.screenshotImg}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </div>
      <figcaption className={styles.screenshotCaption}>{caption}</figcaption>
    </figure>
  );
}

function SlideImage({
  slide,
  index,
}: {
  slide: { src: string; alt: string; caption?: string };
  index: number;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className={styles.slideFigure}>
      <img
        src={slide.src}
        alt={slide.alt}
        className={styles.slideImg}
        loading={index === 0 ? 'eager' : 'lazy'}
        onError={() => setFailed(true)}
      />
      {slide.caption && (
        <figcaption className={styles.slideCaption}>{slide.caption}</figcaption>
      )}
    </figure>
  );
}

export default function SasDetail({ project }: Props) {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Project Summary ── */}
      {project.summary && (
        <section className={styles.section}>
          <p className={styles.summary}>{project.summary}</p>
        </section>
      )}

      {/* ── Competition Context ── */}
      {project.competitionContext && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.competitionContext}</h3>
          <div className={styles.noteCard}>
            <span className={styles.noteEyebrow}>{t.detail.hackathonBrief}</span>
            <p className={styles.noteText}>{project.competitionContext}</p>
          </div>
        </section>
      )}

      {/* ── Business Problem ── */}
      {(project.businessQuestion || project.modelingObjective) && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.businessProblem}</h3>
          <div className={styles.problemGrid}>
            {project.businessQuestion && (
              <div className={styles.problemCard}>
                <span className={styles.problemCardLabel}>{t.detail.businessQuestion}</span>
                <p className={styles.problemCardText}>{project.businessQuestion}</p>
              </div>
            )}
            {project.modelingObjective && (
              <div className={styles.problemCard}>
                <span className={styles.problemCardLabel}>{t.detail.modelingObjective}</span>
                <p className={styles.problemCardText}>{project.modelingObjective}</p>
              </div>
            )}
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

      {/* ── Data Structure ── */}
      {project.dataFields && project.dataFields.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.dataStructure}</h3>
          {project.dataIntro && (
            <p className={styles.bodyText}>{project.dataIntro}</p>
          )}
          <div className={styles.dataTable}>
            <div className={styles.dataHeader}>
              <span>{t.detail.tableVariable}</span>
              <span>{t.detail.tableDescription}</span>
              <span className={styles.dataHeaderNote}>{t.detail.tableNote}</span>
            </div>
            {project.dataFields.map((f) => (
              <div
                key={f.name}
                className={
                  f.name === 'CHURN'
                    ? `${styles.dataRow} ${styles.dataRowTarget}`
                    : styles.dataRow
                }
              >
                <span className={styles.dataName}>
                  {f.name}
                  {f.name === 'CHURN' && (
                    <span className={styles.targetBadge}>{t.detail.targetBadge}</span>
                  )}
                </span>
                <span className={styles.dataDesc}>{f.description}</span>
                <span className={styles.dataNote}>{f.note ?? '—'}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Analysis Flow ── */}
      {project.analysisFlow && project.analysisFlow.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.analysisFlow}</h3>
          <ol className={styles.flowList}>
            {project.analysisFlow.map((step, i) => (
              <li key={step.title} className={styles.flowItem}>
                <span className={styles.flowNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className={styles.flowContent}>
                  <span className={styles.flowTitle}>{step.title}</span>
                  <p className={styles.flowDesc}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ── SAS Tool Usage ── */}
      {project.toolCards && project.toolCards.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.sasToolUsage}</h3>
          <div className={styles.toolGrid}>
            {project.toolCards.map((card) => (
              <div key={card.title} className={styles.toolCard}>
                <span className={styles.toolTitle}>{card.title}</span>
                <p className={styles.toolDesc}>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Analysis Process Screens (screenshots) ── */}
      {project.sasScreenshots && project.sasScreenshots.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.screenshotLabel}>{t.detail.analysisProcessScreens}</h3>
          <p className={styles.screenshotSubtitle}>
            {t.detail.analysisProcessSubtitle}
          </p>
          <div className={styles.screenshotGrid}>
            {project.sasScreenshots.map((s) => (
              <ScreenshotFigure
                key={s.src}
                src={s.src}
                alt={s.alt}
                caption={s.caption}
                category={s.category}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Analysis Plan Slides ── */}
      {project.analysisPlanSlides && project.analysisPlanSlides.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.analysisPlan}</h3>
          <div className={styles.slidesWrap}>
            {project.analysisPlanSlides.map((slide, i) => (
              <SlideImage key={slide.src} slide={slide} index={i} />
            ))}
          </div>
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
