"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from "react";

import styles from "./ProjectRow.module.css";

const EDGE_EPSILON = 2;

type DragState = {
  active: boolean;
  startX: number;
  scrollLeft: number;
};

type ProjectRowLayout = "scroll" | "wrap";

export type Project = {
  title: string;
  subtitle: string;
  meta: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

interface ProjectRowProps {
  projects: Project[];
  cardClassName?: string;
  layout?: ProjectRowLayout;
}

export function ProjectRow({ projects, cardClassName, layout = "scroll" }: ProjectRowProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<DragState>({ active: false, startX: 0, scrollLeft: 0 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const updateScrollState = useCallback(() => {
    if (layout !== "scroll") {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const rowEl = rowRef.current;
    if (!rowEl) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const maxScrollLeft = rowEl.scrollWidth - rowEl.clientWidth;
    if (maxScrollLeft <= EDGE_EPSILON) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    setCanScrollLeft(rowEl.scrollLeft > EDGE_EPSILON);
    setCanScrollRight(rowEl.scrollLeft < maxScrollLeft - EDGE_EPSILON);
  }, [layout, projects.length]);

  useEffect(() => {
    if (layout !== "scroll") {
      return;
    }

    const rowEl = rowRef.current;
    if (!rowEl) {
      return;
    }

    updateScrollState();
    const scrollListenerOptions: AddEventListenerOptions = { passive: true };
    rowEl.addEventListener("scroll", updateScrollState, scrollListenerOptions);
    window.addEventListener("resize", updateScrollState);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => updateScrollState());
      resizeObserver.observe(rowEl);
    }

    const raf = requestAnimationFrame(updateScrollState);
    const timeout = window.setTimeout(updateScrollState, 400);

    return () => {
      rowEl.removeEventListener("scroll", updateScrollState, scrollListenerOptions);
      window.removeEventListener("resize", updateScrollState);
      resizeObserver?.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [layout, updateScrollState]);

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    if (layout !== "scroll") {
      return;
    }

    const rowEl = rowRef.current;
    if (!rowEl) {
      return;
    }

    if (!(canScrollLeft || canScrollRight)) {
      return;
    }

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      rowEl.scrollBy({ left: event.deltaY, behavior: "smooth" });
      requestAnimationFrame(updateScrollState);
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (layout !== "scroll") {
      return;
    }

    const target = event.target as HTMLElement;
    const linkElement = target.closest("a");
    if (linkElement) {
      return;
    }

    event.preventDefault();
    const rowEl = rowRef.current;
    if (!rowEl) {
      return;
    }

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: rowEl.scrollLeft,
    };
    setIsDragging(true);
    rowEl.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (layout !== "scroll") {
      return;
    }

    const rowEl = rowRef.current;
    const drag = dragRef.current;
    if (!rowEl || !drag.active) {
      return;
    }

    event.preventDefault();
    const delta = event.clientX - drag.startX;
    rowEl.scrollLeft = drag.scrollLeft - delta;
    requestAnimationFrame(updateScrollState);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (layout !== "scroll") {
      return;
    }

    const rowEl = rowRef.current;
    if (!rowEl || !dragRef.current.active) {
      return;
    }

    dragRef.current.active = false;
    setIsDragging(false);
    if (rowEl.hasPointerCapture(event.pointerId)) {
      rowEl.releasePointerCapture(event.pointerId);
    }
    requestAnimationFrame(updateScrollState);
  };

  const scrollByDistance = (direction: "left" | "right") => {
    if (layout !== "scroll") {
      return;
    }

    const rowEl = rowRef.current;
    if (!rowEl) {
      return;
    }

    const amount = rowEl.clientWidth * 0.6;
    rowEl.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    requestAnimationFrame(updateScrollState);
  };

  const cards = projects.map((project, index) => {
    const isExternal = project.href.startsWith("http");
    return (
    <Link
      key={`${project.title}-${index}`}
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={styles.cardLink}
    >
      <article className={`${styles.card} ${cardClassName ?? ""}`.trim()}>
        <div className={styles.cardImage}>
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1600px) 32vw, 420px"
            className={styles.cardImageMedia}
          />
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardSubtitle}>{project.subtitle}</p>
          <p className={styles.cardMeta}>{project.meta}</p>
        </div>
      </article>
    </Link>
    );
  });

  if (layout === "wrap") {
    return <div className={styles.wrapRow}>{cards}</div>;
  }

  return (
    <div className={styles.rowWrapper}>
      {canScrollLeft && (
        <>
          <button
            type="button"
            className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
            onClick={() => scrollByDistance("left")}
            aria-label="Scroll projects left"
          >
            {"\u2190"}
          </button>
          <div className={styles.fadeLeft} aria-hidden="true" />
        </>
      )}
      <div
        ref={rowRef}
        className={`${styles.row} ${isDragging ? styles.dragging : ""}`.trim()}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onPointerLeave={finishDrag}
      >
        {cards}
      </div>
      {canScrollRight && (
        <>
          <div className={styles.fadeRight} aria-hidden="true" />
          <button
            type="button"
            className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
            onClick={() => scrollByDistance("right")}
            aria-label="Scroll projects right"
          >
            {"\u2192"}
          </button>
        </>
      )}
    </div>
  );
}
