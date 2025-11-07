"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import styles from "./PrimaryNav.module.css";

type NavItem = {
  label: string;
  href: string;
};

interface PrimaryNavProps {
  items: NavItem[];
  activeHref: string;
}

const RETURN_DELAY = 160;

export function PrimaryNav({ items, activeHref }: PrimaryNavProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const returnTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [activeHrefState, setActiveHrefState] = useState(activeHref);
  const [highlight, setHighlight] = useState({ width: 0, left: 0 });

  const updateHighlight = (href: string) => {
    const index = items.findIndex((item) => item.href === href);
    if (index < 0) {
      return;
    }

    const linkEl = linkRefs.current[index];
    const containerEl = containerRef.current;
    if (!linkEl || !containerEl) {
      return;
    }

    const containerRect = containerEl.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    setHighlight({
      width: linkRect.width,
      left: linkRect.left - containerRect.left,
    });
  };

  useLayoutEffect(() => {
    updateHighlight(activeHrefState);
  }, [activeHrefState, items.length]);

  useEffect(() => {
    const handleResize = () => {
      updateHighlight(activeHrefState);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeHrefState, items.length]);

  const handleHover = (href: string) => {
    if (returnTimeoutRef.current) {
      clearTimeout(returnTimeoutRef.current);
      returnTimeoutRef.current = null;
    }
    updateHighlight(href);
  };

  const handleLeave = () => {
    if (returnTimeoutRef.current) {
      clearTimeout(returnTimeoutRef.current);
    }
    returnTimeoutRef.current = setTimeout(() => {
      updateHighlight(activeHrefState);
      returnTimeoutRef.current = null;
    }, RETURN_DELAY);
  };

  const handleClick = (href: string) => {
    setActiveHrefState(href);
    updateHighlight(href);
  };

  return (
    <div className={styles.navWrapper} ref={containerRef}>
      <div className={styles.track} aria-hidden="true" />
      <div
        className={styles.highlight}
        style={{
          width: highlight.width,
          transform: `translateX(${highlight.left}px)`,
        }}
        aria-hidden="true"
      />
      <nav className={styles.navList} aria-label="Primary navigation">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            ref={(el) => {
              linkRefs.current[index] = el;
            }}
            aria-current={activeHrefState === item.href ? "page" : undefined}
            className={styles.navLink}
            onMouseEnter={() => handleHover(item.href)}
            onMouseLeave={handleLeave}
            onFocus={() => handleHover(item.href)}
            onBlur={handleLeave}
            onClick={() => handleClick(item.href)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
