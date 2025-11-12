import { ProjectRow } from "../../components/Projects/ProjectRow";

import styles from "./page.module.css";

const uxProjects = [
  {
    title: "Spotify UX Audit",
    subtitle: "Experience Strategy",
    meta: "User Research · Journey Mapping · Prototyping",
    imageSrc: "/Spotify_Project copy/Desktop-Home-Revamped.jpg",
    imageAlt: "Spotify redesign dashboard mockups",
    href: "/spotify",
  },
  {
    title: "GrammarlyGo Case Study",
    subtitle: "Product Design",
    meta: "Competitive Analysis · AI Workflows · UI Systems",
    imageSrc: "/assets/Grammarly-Go.webp",
    imageAlt: "GrammarlyGo case study screens",
    href: "/grammarlygo",
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
  {
    title: "React Pizza Store",
    subtitle: "Software Development",
    meta: "React · State Machines · UI Components",
    imageSrc: "/PizzaStore copy.png",
    imageAlt: "Pizza store ordering interface",
    href: "https://react-pizza-store-omega.vercel.app/",
  },
  {
    title: "Pixel Character Generator",
    subtitle: "Software Development",
    meta: "Next.js · OpenAI · Image Synthesis",
    imageSrc: "/PixelCharacterGenerator copy.png",
    imageAlt: "Pixel character generator interface",
    href: "https://pixel-character-generator.vercel.app/",
  },
  {
    title: "Algorithm Visualizer",
    subtitle: "Software Development",
    meta: "React · D3 · Algorithm Education",
    imageSrc: "/AlgorithmVisualizer_Preview copy.png",
    imageAlt: "Algorithm visualizer dashboard",
    href: "https://jecochran-0.github.io/algorithm_visualizer/",
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
            <ProjectRow projects={uxProjects} cardClassName={styles.projectCard} />
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
