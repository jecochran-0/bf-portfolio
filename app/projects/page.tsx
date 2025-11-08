import Image from "next/image";

import { LeftSidebar, EnvelopeIcon } from "../components/LeftSidebar/LeftSidebar";
import { PrimaryNav } from "../components/PrimaryNav/PrimaryNav";
import { ProjectRow } from "../components/Projects/ProjectRow";

import styles from "./page.module.css";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jake",
    label: "LinkedIn",
    icon: (
      <Image
        src="/assets/linkedin-app-white-icon.webp"
        alt="LinkedIn icon"
        width={34}
        height={34}
      />
    ),
    external: true,
  },
  {
    href: "https://twitter.com",
    label: "X",
    icon: <Image src="/assets/x-icon.png" alt="X icon" width={34} height={34} />,
    external: true,
  },
  {
    href: "mailto:hello@jake.dev",
    label: "Email",
    icon: <EnvelopeIcon />,
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
];

const uxProjects = [
  { title: "Project 1", subtitle: "UX Design", meta: "Case Study · Redesign · Mock" },
  { title: "Project 2", subtitle: "UX Design", meta: "React · JavaScript · Game" },
];

const devProjects = [
  { title: "Project 1", subtitle: "Software Development", meta: "React · JavaScript · Game" },
  { title: "Project 2", subtitle: "Software Development", meta: "React · JavaScript · Game" },
  { title: "Project 3", subtitle: "Software Development", meta: "React · JavaScript · Game" },
  { title: "Project 4", subtitle: "Software Development", meta: "React · JavaScript · Game" },
];

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <Image
          src="/assets/Portfolio-Background5.png"
          alt="Snowy battlefield sunrise"
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
          <div className={styles.hero}>
            <div className={styles.navFrame}>
              <PrimaryNav items={navItems} />
            </div>
            <p className={styles.heroSubtitle}>
              Here are my featured projects, I do UX work and Software Development
            </p>
          </div>

          <section className={styles.section}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>UX Design</h2>
            </header>
            <ProjectRow projects={uxProjects} />
          </section>

          <section className={styles.section}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Software Development</h2>
            </header>
            <ProjectRow projects={devProjects} />
          </section>
        </main>
      </div>
    </div>
  );
}
