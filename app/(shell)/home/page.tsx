import Image from "next/image";
import { FaRegFileAlt, FaQuestionCircle } from "react-icons/fa";

import styles from "./home.module.css";

export default function HomeScreen() {
  return (
    <>
      <div data-shell-content className={styles.page}>
        <main className={styles.content}>
          <section className={styles.greeting} id="home">
            <p>Good afternoon, I&apos;m Jake.</p>
          </section>

          <section className={styles.featured} id="projects" aria-label="Featured work">
            <article className={styles.card}>
              <div className={styles.cardMediaWrap}>
                <Image
                  src="/assets/Portfolio-Background4.png"
                  alt="Cinematic forest scene"
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

            <article className={`${styles.card} ${styles.contactCard}`} id="contact">
              <div className={styles.contactGlyph}>
                <span className={styles.contactIconMask} aria-hidden="true" />
              </div>
              <div className={styles.cardCopy}>
                <h3>Contact</h3>
                <p className={styles.cardSubtitle}>Let&apos;s build something</p>
              </div>
            </article>
          </section>

          <section className={styles.progressRow} aria-label="Progress trackers">
            <div className={styles.progressTile}>
              <div className={styles.tileIcon}>
                <FaRegFileAlt />
              </div>
              <div className={styles.tileCopy}>
                <p className={styles.tileTitle}>Learn About Jake</p>
                <p className={styles.tileMeta}>0/5 completed</p>
              </div>
            </div>
            <div className={`${styles.progressTile} ${styles.tipTile}`}>
              <div className={styles.tileIcon}>
                <FaQuestionCircle />
              </div>
              <div className={styles.tipCopy}>
                <p className={styles.tileTitle}>UX Tip Unlock</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

