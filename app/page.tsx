import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

// Hero screen for the Battlefield 1 inspired landing page.
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <Image
          src="/assets/Portfolio-Background1.png"
          alt="Battlefield inspired smoke and embers"
          fill
          priority
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.overlay} />
      <main className={styles.menu}>
        <div className={styles.centerpiece}>
          <div className={styles.logoWrapper}>
            <Image
              src="/assets/DBJ-Logo.png"
              alt="Jake's DBJ monogram"
              fill
              priority
              className={styles.logo}
            />
          </div>
          <p className={styles.welcome}>Welcome to Jake&apos;s Portfolio.</p>
        </div>
        <Link href="/home" className={styles.enterButton} aria-label="Enter portfolio">
          Enter
        </Link>
      </main>
      <footer className={styles.footer}>
        <Link
          href="https://www.linkedin.com/in/jake"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className={styles.social}
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="mailto:hello@jake.dev"
          aria-label="Send Jake an email"
          className={styles.social}
        >
          <MailIcon />
        </Link>
      </footer>
    </div>
  );
}

// Inline icons keep dependencies light while matching the Battlefield UI motif.
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M4.98 3C3.88 3 3 3.89 3 5s.89 2 1.98 2h.02C6.09 7 7 6.11 7 5S6.11 3 4.98 3z" />
      <path d="M3.5 8.5h3v12h-3z" />
      <path d="M9 8.5h2.9v1.7h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V20.5h-3v-5.5c0-1.31-.02-3-1.9-3-1.9 0-2.2 1.43-2.2 2.9v5.6H9z" />
    </svg>
  );
}

// Envelope glyph mirrors the in-game contact affordances without new assets.
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}
