import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import styles from "./LeftSidebar.module.css";

type SocialLink = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
};

interface LeftSidebarProps {
  badgeSrc: string;
  badgeAlt: string;
  socials: SocialLink[];
}

export function LeftSidebar({ badgeSrc, badgeAlt, socials }: LeftSidebarProps) {
  return (
    <aside className={styles.sidebar} aria-label="Profile shortcuts">
      <div className={styles.sidebarRail}>
        <div className={styles.logoBadge}>
          <Image
            src={badgeSrc}
            alt={badgeAlt}
            fill
            priority
            className={styles.logoImage}
          />
        </div>
        <div className={styles.iconColumn}>
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noreferrer" : undefined}
              aria-label={social.label}
              className={styles.iconLink}
            >
              <span className={styles.iconWrapper}>{social.icon}</span>
            </Link>
          ))}
        </div>
        <Link href="/" aria-label="Return to welcome" className={styles.logoutLink}>
          <span className={styles.logoutIcon}>⎋</span>
          <span className={styles.logoutLabel}>Logout</span>
        </Link>
      </div>
      <div className={styles.sidebarLine} aria-hidden="true" />
    </aside>
  );
}

export function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className={styles.envelopeIcon}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}
