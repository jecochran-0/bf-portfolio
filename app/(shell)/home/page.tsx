"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaRegFileAlt, FaQuestionCircle } from "react-icons/fa";

import { getProgress, incrementProgress, isTipUnlocked } from "../../utils/progress";
import styles from "./home.module.css";

const MAX_PROGRESS = 5;
const UX_TIP = "Pay attention to what users do, not what they say";
const UX_TIP_AUTHOR = "Jakob Nielsen";

export default function HomeScreen() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Load progress from localStorage
    const currentProgress = getProgress();
    setProgress(currentProgress);
    setIsUnlocked(isTipUnlocked());
  }, []);

  useEffect(() => {
    // Listen for progress updates from social link clicks
    const handleProgressUpdate = () => {
      const currentProgress = getProgress();
      setProgress(currentProgress);
      setIsUnlocked(isTipUnlocked());
    };

    window.addEventListener("progressUpdated", handleProgressUpdate);
    return () => {
      window.removeEventListener("progressUpdated", handleProgressUpdate);
    };
  }, []);

  const handleTabClick = () => {
    const currentProgress = getProgress();
    
    if (currentProgress < MAX_PROGRESS) {
      const newProgress = incrementProgress();
      setProgress(newProgress);
      
      if (newProgress >= MAX_PROGRESS) {
        setIsUnlocked(true);
      }
    }
  };

  return (
    <>
      <div data-shell-content className={styles.page}>
        <main className={styles.content}>
          <section className={styles.greeting} id="home">
            <p>Good afternoon, I&apos;m Jake.</p>
          </section>

          <section className={styles.featured} id="projects" aria-label="Featured work">
            <Link href="/projects" className={styles.cardLink} onClick={handleTabClick}>
              <article className={styles.card}>
                <div className={styles.cardMediaWrap}>
                  <Image
                    src="/Projects-Thumbnail.png"
                    alt="Projects thumbnail"
                    fill
                    className={styles.cardMedia}
                    sizes="(max-width: 1400px) 40vw, 420px"
                    priority
                  />
                </div>
                <div className={styles.cardCopy}>
                  <h3>Projects</h3>
                  <p className={styles.cardSubtitle}>UX | Development</p>
                  <p className={styles.cardMeta}>Case studies · redesigns · applications</p>
                </div>
              </article>
            </Link>

            <Link href="/about" className={styles.cardLink} onClick={handleTabClick}>
              <article className={styles.card} id="about">
                <div className={styles.cardMediaWrap}>
                  <Image
                    src="/assets/Selfie.jpeg"
                    alt="Jake smiling at desk"
                    fill
                    className={styles.cardMedia}
                    sizes="(max-width: 1400px) 40vw, 420px"
                  />
                </div>
                <div className={styles.cardCopy}>
                  <h3>About Me</h3>
                  <p className={styles.cardSubtitle}>Meet Jake Cochran</p>
                  <p className={styles.cardMeta}>Product design · front-end · strategy</p>
                </div>
              </article>
            </Link>

            <Link href="/contact" className={styles.cardLink} onClick={handleTabClick}>
              <article className={`${styles.card} ${styles.contactCard}`} id="contact">
                <div className={styles.contactGlyph}>
                  <span className={styles.contactIconMask} aria-hidden="true" />
                </div>
                <div className={styles.cardCopy}>
                  <h3>Contact</h3>
                  <p className={styles.cardSubtitle}>Let&apos;s build something</p>
                </div>
              </article>
            </Link>
          </section>

          <section className={styles.progressRow} aria-label="Progress trackers">
            <div className={styles.progressTile}>
              <div className={styles.tileIcon}>
                <FaRegFileAlt />
              </div>
              <div className={styles.tileCopy}>
                <p className={styles.tileTitle}>Learn About Jake</p>
                <p className={styles.tileMeta}>
                  {progress}/{MAX_PROGRESS} completed
                </p>
              </div>
            </div>
            <div className={`${styles.progressTile} ${styles.tipTile} ${isUnlocked ? styles.tipUnlocked : ""}`}>
              <div className={styles.tileIcon}>
                <FaQuestionCircle />
              </div>
              <div className={styles.tipCopy}>
                {isUnlocked ? (
                  <>
                    <p className={styles.tileTitle}>UX Tip</p>
                    <p className={styles.tipQuote}>&quot;{UX_TIP}&quot;</p>
                    <p className={styles.tipAuthor}>— {UX_TIP_AUTHOR}</p>
                  </>
                ) : (
                  <p className={styles.tileTitle}>UX Tip Unlock</p>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
