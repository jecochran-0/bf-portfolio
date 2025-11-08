"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./ProjectRow.module.css";

type Project = {
  title: string;
  subtitle: string;
  meta: string;
};

interface ProjectRowProps {
  projects: Project[];
}

export function ProjectRow({ projects }: ProjectRowProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const rowEl = rowRef.current;
    if (!rowEl) {
      return;
    }

    const evaluateOverflow = () => {
      const remaining = rowEl.scrollWidth - (rowEl.scrollLeft + rowEl.clientWidth);
      setShowArrow(remaining > 12);
    };

    evaluateOverflow();
    rowEl.addEventListener("scroll", evaluateOverflow);
    window.addEventListener("resize", evaluateOverflow);

    return () => {
      rowEl.removeEventListener("scroll", evaluateOverflow);
      window.removeEventListener("resize", evaluateOverflow);
    };
  }, []);

  const handleAdvance = () => {
    const rowEl = rowRef.current;
    if (!rowEl) {
      return;
    }

    rowEl.scrollBy({ left: rowEl.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <div className={styles.rowWrapper}>
      <div className={styles.row} ref={rowRef}>
        {projects.map((project, index) => (
          <article key={`${project.title}-${index}`} className={styles.card}>
            <div className={styles.cardImage}>Placeholder</div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardSubtitle}>{project.subtitle}</p>
              <p className={styles.cardMeta}>{project.meta}</p>
            </div>
          </article>
        ))}
      </div>
      {showArrow && (
        <>
          <div className={styles.fadeRight} aria-hidden="true" />
          <button
            type="button"
            className={styles.carouselButton}
            onClick={handleAdvance}
            aria-label="Scroll projects"
          >
            {"\u2192"}
          </button>
        </>
      )}
    </div>
  );
}
