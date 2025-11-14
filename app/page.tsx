"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { incrementProgress, resetProgress } from "./utils/progress";
import styles from "./page.module.css";

// Hero screen for the Battlefield 1 inspired landing page.
export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Reset UX tip progress when welcome screen loads
    resetProgress();
    
    // Prevent scrolling on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      
      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      };
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate to normal speed
    video.playbackRate = 1.0;

    // Ensure video is fully loaded for smooth looping
    const handleCanPlayThrough = () => {
      video.play().catch(() => {
        // Autoplay prevented, will play on user interaction
      });
    };

    video.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  const handleEnterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Select and store background BEFORE navigation to prevent visible change during fade-in
    const sessionKey = "portfolio-bg-selection";
    const BACKGROUND_SOURCES = [
      "/assets/Portfolio-Background2.png",
      "/assets/Portfolio-Background3.png",
      "/assets/Portfolio-Background4.png",
      "/assets/Portfolio-Background5.png",
    ];
    
    // Only select if not already stored (preserves selection across page refreshes)
    if (!sessionStorage.getItem(sessionKey)) {
      const selected =
        BACKGROUND_SOURCES[
          Math.floor(Math.random() * BACKGROUND_SOURCES.length)
        ];
      sessionStorage.setItem(sessionKey, selected);
    }
    
    setIsFadingOut(true);
    setTimeout(() => {
      router.push("/home");
    }, 800); // Match fade-out duration
  };

  return (
    <div className={`${styles.page} ${isFadingOut ? styles.fadeOut : ""}`}>
      <div className={styles.background}>
        <Image
          src="/assets/Portfolio-Background1.png"
          alt="Battlefield inspired smoke and embers"
          fill
          priority
          className={styles.backgroundImage}
        />
      </div>
      <video
        ref={videoRef}
        className={styles.smokeVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/Smoke&Sparks.webm" type="video/webm" />
      </video>
      <div className={styles.overlay} />
      <main className={styles.menu}>
        <div className={styles.centerpiece}>
          <div className={styles.logoWrapper}>
            <Image
              src="/assets/DBJ-Logo.png"
              alt="Jake's DBJ monogram"
              fill
              sizes="(max-width: 768px) 200px, 300px"
              priority
              className={styles.logo}
            />
          </div>
          <p className={styles.welcome}>Welcome to Jake&apos;s Portfolio.</p>
        </div>
        <Link
          href="/home"
          onClick={handleEnterClick}
          className={styles.enterButton}
          aria-label="Enter portfolio"
        >
          Enter
        </Link>
      </main>
      <footer className={styles.footer}>
        <Link
          href="https://www.linkedin.com/in/jake-cochran"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className={styles.social}
          onClick={() => {
            incrementProgress();
            window.dispatchEvent(new CustomEvent("progressUpdated"));
          }}
        >
          <Image
            src="/assets/linkedin-app-white-icon.webp"
            alt="LinkedIn icon"
            width={34}
            height={34}
          />
        </Link>
        <Link
          href="mailto:jake.e.cochran@gmail.com"
          aria-label="Send Jake an email"
          className={styles.social}
        >
          <MailIcon />
        </Link>
      </footer>
    </div>
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
