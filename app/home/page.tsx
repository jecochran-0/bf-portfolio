import Image from "next/image";
import Link from "next/link";

import { LeftSidebar, EnvelopeIcon } from "../components/LeftSidebar/LeftSidebar";
import { PrimaryNav } from "../components/PrimaryNav/PrimaryNav";
import styles from "./home.module.css";

export default function HomeScreen() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/jake",
      label: "LinkedIn",
      icon: (
        <Image
          src="/assets/linkedin-app-white-icon.webp"
          alt="LinkedIn icon"
          width={36}
          height={36}
        />
      ),
      external: true,
    },
    {
      href: "https://twitter.com",
      label: "X",
      icon: (
        <Image src="/assets/x-icon.png" alt="X icon" width={36} height={36} />
      ),
      external: true,
    },
    {
      href: "mailto:hello@jake.dev",
      label: "Email",
      icon: <EnvelopeIcon />,
    },
  ];

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <Image
          src="/assets/Portfolio-Background2.png"
          alt="Sunset battlefield landscape"
          fill
          priority
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.layout}>
        <LeftSidebar
          badgeSrc="/assets/DBJ-Logo.png"
          badgeAlt="Jake DBJ monogram"
          socials={socialLinks}
        />
        <main className={styles.content}>
          <div className={styles.topBar}>
            <PrimaryNav items={navItems} activeHref="#home" />
          </div>
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
                <NotebookIcon />
              </div>
              <div className={styles.tileCopy}>
                <p className={styles.tileTitle}>Learn About Jake</p>
                <p className={styles.tileMeta}>0/5 completed</p>
              </div>
            </div>
            <div className={`${styles.progressTile} ${styles.tipTile}`}>
              <div className={styles.tileIcon}>
                <QuestionIcon />
              </div>
              <div className={styles.tipCopy}>
                <p className={styles.tileTitle}>UX Tip Unlock</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function NotebookIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M7 4.5h8.8a1.6 1.6 0 0 1 1.6 1.6v11.8a1.6 1.6 0 0 1-1.6 1.6H7a1.6 1.6 0 0 1-1.6-1.6V6.1A1.6 1.6 0 0 1 7 4.5Zm0 1.8v11.8c0 .11.09.2.2.2h7.9a.2.2 0 0 0 .2-.2V6.3a.2.2 0 0 0-.2-.2Zm2.2 1.7h4.3v1.1h-4.3Zm0 3.1h4.3v1.1h-4.3Zm0 3.1h2.7v1.1h-2.7Z" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 5c-2.1 0-3.6 1.3-3.6 3h1.8c0-.8.8-1.3 1.8-1.3s1.8.5 1.8 1.4c0 .7-.5 1.1-1.5 1.6l-.6.3c-1.3.7-1.9 1.4-1.9 2.6V14h1.8v-.3c0-.8.3-1.1 1.2-1.6 1.2-.6 2.1-1.4 2.1-2.8C15.1 6.4 13.7 5 12 5Zm0 11.6c-.8 0-1.4.6-1.4 1.4S11.2 19.4 12 19.4s1.4-.6 1.4-1.4-.6-1.4-1.4-1.4Z" />
    </svg>
  );
}

