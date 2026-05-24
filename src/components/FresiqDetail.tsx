import { Fragment, useState } from 'react';
import type { Project } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './FresiqDetail.module.css';

interface Props {
  project: Project;
}

function ImageWithFallback({
  src,
  alt,
  className,
  onMissing,
}: {
  src: string;
  alt: string;
  className?: string;
  onMissing?: () => void;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        setFailed(true);
        onMissing?.();
      }}
    />
  );
}

function ProcessFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className={styles.processFigure}>
      <img
        src={src}
        alt={alt}
        className={styles.processImg}
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <figcaption className={styles.processCaption}>{caption}</figcaption>
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

export default function FresiqDetail({ project }: Props) {
  const [awardFailed, setAwardFailed] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* ── Project Summary ── */}
      {project.summary && (
        <section className={styles.section}>
          <p className={styles.summary}>{project.summary}</p>
        </section>
      )}

      {/* ── Challenge Context ── */}
      {project.challengeContext && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.challengeContext}</h3>
          <div className={styles.noteCard}>
            <span className={styles.noteEyebrow}>{t.detail.hackathonBrief}</span>
            <p className={styles.noteText}>{project.challengeContext}</p>
          </div>
        </section>
      )}

      {/* ── Problem Insight ── */}
      {project.problemInsight && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.problemInsight}</h3>
          <div className={styles.noteCard}>
            <p className={styles.noteText}>{project.problemInsight}</p>
          </div>
        </section>
      )}

      {/* ── MVP Demo Flow ── */}
      {project.demoFlow && project.demoFlow.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.mvpDemoFlow}</h3>
          <div className={styles.flowWrap}>
            {project.demoFlow.map((step, i) => (
              <Fragment key={step.label}>
                {i > 0 && (
                  <span className={styles.flowArrow} aria-hidden="true">
                    →
                  </span>
                )}
                <div className={styles.flowStep}>
                  <span className={styles.flowLabel}>{step.label}</span>
                  <p className={styles.flowDesc}>{step.description}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
      )}

      {/* ── Feature Highlights ── */}
      {project.featureCards && project.featureCards.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.featureHighlights}</h3>
          <div className={styles.featureGrid}>
            {project.featureCards.map((card) => (
              <div key={card.title} className={styles.featureCard}>
                <span className={styles.featureTitle}>{card.title}</span>
                <p className={styles.featureDesc}>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Process Photos ── */}
      {project.processImages && project.processImages.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.behindTheBuild}</h3>
          <div className={styles.processGrid}>
            {project.processImages.map((img) => (
              <ProcessFigure
                key={img.src}
                src={img.src}
                alt={img.alt}
                caption={img.caption}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Pitch Deck ── */}
      {(project.pitchDeck || project.pitchSlides) && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.detail.pitchDeck}</h3>
          {project.pitchDescription && (
            <p className={styles.pitchDesc}>{project.pitchDescription}</p>
          )}

          {project.pitchSlides && project.pitchSlides.length > 0 ? (
            /* ── Slide images (primary) ── */
            <div className={styles.slidesWrap}>
              {project.pitchSlides.map((slide, i) => (
                <SlideImage key={slide.src} slide={slide} index={i} />
              ))}
            </div>
          ) : project.pitchDeck ? (
            /* ── PDF embed fallback ── */
            <div className={styles.pdfContainer}>
              <object
                data={project.pitchDeck.file}
                type="application/pdf"
                className={styles.pdfObject}
                aria-label={t.detail.pdfAriaLabel}
              >
                <p className={styles.pdfFallback}>
                  {t.detail.pdfFallbackLead}{' '}
                  <a
                    href={project.pitchDeck.file}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.pdfFallbackLink}
                  >
                    {t.detail.pdfFallbackLink} →
                  </a>
                </p>
              </object>
            </div>
          ) : null}
        </section>
      )}

      {/* ── Outcome / Award ── */}
      {project.outcomeText && (
        <section className={styles.section}>
          <h3 className={styles.sectionLabel}>{t.modal.outcome}</h3>
          <div className={styles.outcomeWrap}>
            <p className={styles.bodyText}>{project.outcomeText}</p>
            {project.awardImage && !awardFailed && (
              <figure className={styles.awardFigure}>
                <ImageWithFallback
                  src={project.awardImage.src}
                  alt={project.awardImage.alt}
                  className={styles.awardImg}
                  onMissing={() => setAwardFailed(true)}
                />
                <figcaption className={styles.awardCaption}>
                  {project.awardImage.caption}
                </figcaption>
              </figure>
            )}
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
