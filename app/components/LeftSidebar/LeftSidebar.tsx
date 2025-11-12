"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { incrementProgress } from "../../utils/progress";
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
  const handleSocialClick = () => {
    incrementProgress();
    // Trigger a custom event to update the home page if it's mounted
    window.dispatchEvent(new CustomEvent("progressUpdated"));
  };

  const handleLogoClick = () => {
    incrementProgress();
    window.dispatchEvent(new CustomEvent("progressUpdated"));
  };

  return (
    <aside className={styles.sidebar} aria-label="Profile shortcuts">
      <div className={styles.sidebarRail}>
        <Link
          href="https://www.designedby-jake.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.logoBadgeLink}
          onClick={handleLogoClick}
        >
          <div className={styles.logoBadge}>
            <Image
              src={badgeSrc}
              alt={badgeAlt}
              fill
              sizes="(max-width: 768px) 60px, 80px"
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>
        <div className={styles.iconColumn}>
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noreferrer" : undefined}
              aria-label={social.label}
              className={styles.iconLink}
              onClick={social.external ? handleSocialClick : undefined}
            >
              <span className={styles.iconWrapper}>{social.icon}</span>
            </Link>
          ))}
        </div>
        <Link href="/" aria-label="Return to welcome" className={styles.logoutLink}>
          <span className={styles.logoutIcon}>⎋</span>
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
