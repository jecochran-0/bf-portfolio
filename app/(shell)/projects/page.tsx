import { ProjectRow } from "../../components/Projects/ProjectRow";

import styles from "./page.module.css";

const uxProjects = [
  {
    title: "Bridges to Science",
    subtitle: "UX Case Study",
    meta: "Nonprofit UX · Information Architecture · Conversion Design",
    imageSrc: "/bridges-to-science/loading-screen-thumbnail.png",
    imageAlt: "Bridges to Science redesign loading screen",
    href: "/bridgestoscience",
  },
  {
    title: "GrammarlyGo Case Study",
    subtitle: "Product Design",
    meta: "Competitive Analysis · AI Workflows · UI Systems",
    imageSrc: "/assets/Grammarly-Go.webp",
    imageAlt: "GrammarlyGo case study screens",
    href: "/grammarlygo",
  },
  {
    title: "Triangle Stepping Stones",
    subtitle: "UX Design & Development",
    meta: "User Research · Web Design · CMS Development",
    imageSrc: "/tss/tss-thumbnail.png",
    imageAlt: "Triangle Stepping Stones website redesign",
    href: "/trianglesteppingstones",
  },
  {
    title: "MBTA mTicket Redesign",
    subtitle: "UX Research",
    meta: "Review Analysis · User Personas · Prototyping",
    imageSrc: "/mbta/before/MBTA-homescreen.jpg",
    imageAlt: "MBTA mTicket app redesign case study",
    href: "/mbta",
  },
];

const devProjects = [
  {
    title: "React Wizard Chess",
    subtitle: "Software Development",
    meta: "React · Chess.js · Real-time Match Play",
    imageSrc: "/wizards-chess.png",
    imageAlt: "React Wizard Chess gameplay board",
    href: "https://react-wizard-chess.vercel.app/",
  },
  {
    title: "Bento Grid Creator",
    subtitle: "Software Development",
    meta: "Next.js · OpenCV · Layout Automation",
    imageSrc: "/BentoBoxPreview copy.png",
    imageAlt: "Generated bento box gallery layout",
    href: "https://jecochran-0.github.io/BentoBox/",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div data-shell-content className={styles.page}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <p className={styles.heroSubtitle}>
              Here are my featured projects
            </p>
          </div>

          <section className={styles.section}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>UX Design</h2>
            </header>
            <ProjectRow
              projects={uxProjects}
              cardClassName={styles.projectCard}
              layout="wrap"
            />
          </section>

          <section className={styles.section}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Software Development</h2>
            </header>
            <ProjectRow projects={devProjects} cardClassName={styles.projectCard} layout="wrap" />
          </section>
        </div>
      </div>
    </>
  );
}
