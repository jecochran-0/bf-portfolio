import Image from "next/image";

import { ProjectRow } from "../../components/Projects/ProjectRow";

import styles from "./page.module.css";

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
    <>
      <div data-shell-content className={styles.page}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <p className={styles.heroSubtitle}>
              Here are my featured projects, I do UX work and Software Development
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
            <ProjectRow projects={devProjects} cardClassName={styles.projectCard} />
          </section>
        </div>
      </div>
    </>
  );
}
