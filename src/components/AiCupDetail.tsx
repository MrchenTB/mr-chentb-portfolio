import { Fragment } from 'react';
import type { Project } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './AiCupDetail.module.css';

interface Props {
  project: Project;
}

export default function AiCupDetail({ project }: Props) {
  const d = project.detail;
  const { t } = useLanguage();

  return (
    <>
      {/* ── Key Metrics ── */}
      {project.metrics && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.keyMetrics}</h3>
          <div className={styles.metricsGrid}>
            {project.metrics.map((m) => (
              <div key={m.label} className={styles.metricCard}>
                <span className={styles.metricLabel}>{m.label}</span>
                <span className={styles.metricValue}>{m.value}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Problem · Approach ── */}
      {project.paf && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.pafTitle}</h3>
          <div className={styles.pafGrid}>
            <PafCard label={t.detail.pafProblem} text={project.paf.problem} compact />
            <PafCard label={t.detail.pafApproach} text={project.paf.approach} />
          </div>
        </section>
      )}

      {/* ── Model Pipeline ── */}
      {project.pipeline && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.modelPipeline}</h3>
          <div className={styles.pipelineWrap}>
            <div className={styles.pipelineSteps}>
              {project.pipeline.map((stage, i) => (
                <Fragment key={stage}>
                  {i > 0 && (
                    <span className={styles.pipeArrow} aria-hidden="true">→</span>
                  )}
                  <div
                    className={
                      i === project.pipeline!.length - 1
                        ? `${styles.pipeStep} ${styles.pipeStepAccent}`
                        : styles.pipeStep
                    }
                  >
                    {stage}
                  </div>
                </Fragment>
              ))}
            </div>
            <div className={styles.pipelineSplit}>
              <span className={styles.pipelineSplitLabel}>{t.detail.outputHeads}</span>
              <div className={styles.pipelineHeads}>
                {t.detail.pipelineHeads.map((head) => (
                  <div key={head} className={styles.pipeHead}>{head}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── My Role ── */}
      {project.roleCards && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.myRole}</h3>
          <div className={styles.roleGrid}>
            {project.roleCards.map((card) => (
              <div key={card.title} className={styles.roleCard}>
                <span className={styles.roleTitle}>{card.title}</span>
                <p className={styles.roleDesc}>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Outcome ── */}
      <section className={styles.section}>
        <h3 className={styles.sectionLabel}>{t.detail.outcome}</h3>
        <p className={styles.outcomeText}>{d.outcome}</p>
      </section>

      {/* ── Leaderboard Result ── */}
      {project.leaderboardImage && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.leaderboardResult}</h3>
          {project.leaderboardDesc && (
            <p className={styles.leaderboardDesc}>{project.leaderboardDesc}</p>
          )}
          <figure className={styles.leaderboardFigure}>
            <img
              src={project.leaderboardImage}
              alt={t.detail.leaderboardAlt}
              className={styles.leaderboardImg}
              loading="lazy"
              onError={(e) => {
                const section = (e.currentTarget as HTMLImageElement).closest('section');
                if (section) (section as HTMLElement).style.display = 'none';
              }}
            />
            {project.leaderboardCaption && (
              <figcaption className={styles.leaderboardCaption}>
                {project.leaderboardCaption}
              </figcaption>
            )}
          </figure>
        </section>
      )}

      {/* ── Reflection ── */}
      <section className={styles.section}>
        <h3 className={styles.sectionLabel}>{t.detail.reflection}</h3>
        <div className={styles.reflectionCard}>
          <p className={styles.reflectionText}>{d.reflection}</p>
        </div>
      </section>

      {/* ── GitHub ── */}
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
  );
}

function PafCard({ label, text, compact }: { label: string; text: string; compact?: boolean }) {
  return (
    <div className={`${styles.pafCard} ${compact ? styles.pafCardCompact : ''}`}>
      <span className={styles.pafLabel}>{label}</span>
      <p className={styles.pafText}>{text}</p>
    </div>
  );
}
