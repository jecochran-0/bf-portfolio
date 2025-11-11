import Image from "next/image";

import { EnvelopeIcon } from "../../components/LeftSidebar/LeftSidebar";

import styles from "./page.module.css";

const contactCards = [
  {
    title: "Business",
    subtitle: "designedby-jake.com",
    href: "https://designedbyjake.com",
    icon: (
      <Image
        src="/assets/DBJ-Logo.png"
        alt="DBJ logo"
        width={64}
        height={64}
      />
    ),
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/jake",
    icon: (
      <Image
        src="/assets/linkedin-app-white-icon.webp"
        alt="LinkedIn icon"
        width={64}
        height={64}
      />
    ),
  },
  {
    title: "GitHub",
    href: "https://github.com",
    icon: <GitHubIcon />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
    icon: (
      <Image src="/assets/x-icon.png" alt="X icon" width={64} height={64} />
    ),
  },
  {
    title: "Mail",
    href: "mailto:hello@jake.dev",
    icon: <EnvelopeIcon />,
  },
];

export default function ContactPage() {
  return (
    <>
      <div data-shell-content className={styles.page}>
        <div className={styles.content}>
          <section className={styles.intro} aria-label="Contact details">
            <p>How to get in touch with me.</p>
            <a href="mailto:jake.e.cochran@gmail.com">
              <span>jake.e.cochran@gmail.com</span>
            </a>
            <a href="mailto:designedbyjake.co@gmail.com">
              <span>designedbyjake.co@gmail.com</span>
            </a>
          </section>
          <section className={styles.grid} aria-label="Contact methods">
            {contactCards.map((card) => (
              <a key={card.title} href={card.href} className={styles.card}>
                <div className={styles.cardHeader}>{card.icon}</div>
                <div>
                  <p className={styles.cardTitle}>{card.title}</p>
                  <p className={styles.cardSubtitle}>{card.subtitle}</p>
                </div>
              </a>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" width="64" height="64">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.3.68.89.68 1.8 0 1.3-.01 2.35-.01 2.67 0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}
