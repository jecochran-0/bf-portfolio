"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { IconType } from "react-icons";
import {
  FaAlignJustify,
  FaBezierCurve,
  FaClipboardList,
  FaDatabase,
  FaDraftingCompass,
  FaFootballBall,
  FaGamepad,
  FaGlobe,
  FaMobileAlt,
  FaNetworkWired,
  FaPenNib,
  FaPlug,
  FaProjectDiagram,
  FaSearch,
  FaSyncAlt,
  FaTachometerAlt,
  FaThLarge,
  FaUniversalAccess,
} from "react-icons/fa";
import { GiGolfFlag, GiTennisBall } from "react-icons/gi";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import styles from "./page.module.css";

type SkillItem = {
  icon: IconType;
  label: string;
};

type SkillCategory = {
  title: string;
  accent: string;
  items: SkillItem[];
};

type SimpleCard = {
  icon: IconType;
  label: string;
};

type PersonalLetter = {
  greeting: string;
  subheading: string;
  introParagraphs: string[];
  pillars: { title: string; text: string }[];
  storyTitle: string;
  storyParagraphs: string[];
  hobbiesTitle: string;
  hobbies: string[];
};

type PersonalTabDefinition = {
  id: "personal";
  label: string;
  heading: string;
  photo: string;
  letter: PersonalLetter;
};

type SkillsTabDefinition = {
  id: "skills";
  label: string;
  heading: string;
  photo: string;
  categories: SkillCategory[];
};

type SimpleCardsTabDefinition = {
  id: "interests" | "resume";
  label: string;
  heading: string;
  description?: string;
  photo: string;
  cards: SimpleCard[];
  resumeUrl?: string;
};

type TabDefinition = PersonalTabDefinition | SkillsTabDefinition | SimpleCardsTabDefinition;

const tabs: TabDefinition[] = [
  {
    id: "personal",
    label: "Personal",
    heading: "Personal",
    photo: "/assets/Cat.jpeg",
    letter: {
      greeting: "Hey, I'm Jake",
      subheading: "I bridge UX/UI design with software engineering.",
      introParagraphs: [
        "I live at the crossroads of product design and development. Whether I’m leading an app from discovery to deployment or helping two teams speak the same language, I love building experiences that feel intentional, effortless, and move the needle.",
        "My work always starts with the user. I obsess over user needs, then translate them into interfaces, features, and visuals that guide, anticipate, delight, and convert.",
      ],
      pillars: [
        {
          title: "Designer Roots",
          text: "I approach every problem with a designer’s eye, framing challenges, gathering feedback, and iterating until the solution feels inevitable.",
        },
        {
          title: "Developer Mindset",
          text: "I’m fluent in the technical world. That means design decisions consider engineering trade-offs from the start, and I can carry concepts all the way into production code.",
        },
        {
          title: "Problem Solver",
          text: "I enjoy the puzzles. The messier the problem, the more satisfying it is to untangle it into something clear, performant, and human.",
        },
      ],
      storyTitle: "My Story",
      storyParagraphs: [
        "I’m a recent graduate of the University of Wisconsin–Madison with a perspective shaped by sketchbooks, custom PCs, and a curiosity for how things work.",
        "That same curiosity drives me today. I want people to feel something when they use the products I help build to notice the craft and to enjoy every interaction. Sometimes it feels like everything on the internet is the same layout recycled over and over again, I want to create experiences that are truly unique.",
      ],
      hobbiesTitle: "When I’m not coding…",
      hobbies: ["Flag Football", "Chess", "Gaming", "Reading"],
    },
  },
  {
    id: "skills",
    label: "Skills",
    heading: "UX",
    photo: "/assets/Graduating.jpeg",
    categories: [
      {
        title: "Frontend Development",
        accent: "#FF8B45",
        items: [
          { icon: SiReact, label: "React.js" },
          { icon: SiJavascript, label: "JavaScript" },
          { icon: SiHtml5, label: "HTML5" },
          { icon: SiCss3, label: "CSS3" },
          { icon: SiTypescript, label: "TypeScript" },
          { icon: SiRedux, label: "Redux" },
        ],
      },
      {
        title: "Design & Prototyping",
        accent: "#2ED7C1",
        items: [
          { icon: SiFigma, label: "Figma" },
          { icon: FaPenNib, label: "UI Design" },
          { icon: FaProjectDiagram, label: "UX Design" },
          { icon: FaDraftingCompass, label: "Wireframing" },
          { icon: FaBezierCurve, label: "Prototyping" },
          { icon: FaSearch, label: "User Research" },
        ],
      },
      {
        title: "Backend & APIs",
        accent: "#4AA2FF",
        items: [
          { icon: SiNodedotjs, label: "Node.js" },
          { icon: FaNetworkWired, label: "RESTful APIs" },
          { icon: SiExpress, label: "Express" },
          { icon: FaDatabase, label: "Database Design" },
          { icon: FaPlug, label: "API Integration" },
        ],
      },
      {
        title: "Styling & Frameworks",
        accent: "#FFC74A",
        items: [
          { icon: SiTailwindcss, label: "Tailwind CSS" },
          { icon: SiBootstrap, label: "Bootstrap" },
          { icon: FaMobileAlt, label: "Responsive Design" },
          { icon: FaThLarge, label: "CSS Grid" },
          { icon: FaAlignJustify, label: "Flexbox" },
        ],
      },
      {
        title: "Version Control & Tools",
        accent: "#52E38C",
        items: [
          { icon: SiGit, label: "Git" },
          { icon: SiGithub, label: "GitHub" },
          { icon: FaSyncAlt, label: "Agile" },
          { icon: SiJira, label: "Jira" },
          { icon: FaClipboardList, label: "Project Management" },
        ],
      },
      {
        title: "Additional Skills",
        accent: "#FF5C74",
        items: [
          { icon: FaMobileAlt, label: "Mobile-First Design" },
          { icon: FaTachometerAlt, label: "Performance Optimization" },
          { icon: FaGlobe, label: "Cross-browser Testing" },
          { icon: FaUniversalAccess, label: "Accessibility" },
        ],
      },
    ],
  },
  {
    id: "interests",
    label: "Interests",
    heading: "Interests",
    description: "What fuels my curiosity when I’m away from the monitor.",
    photo: "/assets/Selfie.jpeg",
    cards: [
      { icon: FaFootballBall, label: "NFL" },
      { icon: FaGamepad, label: "Gaming" },
      { icon: GiTennisBall, label: "Tennis" },
      { icon: GiGolfFlag, label: "Golf" },
    ],
  },
  {
    id: "resume",
    label: "Resume",
    heading: "Resume",
    description: "A distilled view of my impact, roles, and recognitions.",
    photo: "/assets/Tennis.jpeg",
    resumeUrl: "/Jake-Cochran-Resume.pdf",
    cards: [],
  },
];

const CheckmarkIcon = () => (
  <span className={styles.tabCheck}>
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <polyline
        points="8 17 14 23 24 10"
        fill="none"
        stroke="#ffffff"
        strokeWidth={4}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  </span>
);

export default function AboutPage() {
  const [activeTabId, setActiveTabId] = useState<TabDefinition["id"]>("personal");
  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
    [activeTabId]
  );

  return (
    <>
      <div data-shell-content className={styles.page}>
        <div className={styles.content}>
          <div className={styles.mainArea}>
            <div className={styles.leftStack}>
              <p className={styles.introHeading}>Learn about me.</p>
              <div className={styles.photoWrapper}>
                <Image
                  src={activeTab.photo}
                  alt={`${activeTab.heading} preview`}
                  fill
                  sizes="(max-width: 960px) 80vw, 360px"
                  style={{
                    objectFit: "cover",
                    objectPosition:
                      activeTab.id === "interests" ? "20% center" : "80% center",
                  }}
                />
              </div>
              <nav className={styles.tabList} aria-label="About navigation">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`${styles.tabButton} ${
                      activeTab.id === tab.id ? styles.tabButtonActive : ""
                    }`}
                    onClick={() => setActiveTabId(tab.id)}
                  >
                    {tab.label}
                    {activeTab.id === tab.id ? <CheckmarkIcon /> : null}
                  </button>
                ))}
              </nav>
            </div>
            <div className={styles.panelScrollArea}>
              <section className={styles.panel} aria-live="polite">
                {activeTab.id === "personal" ? (
                  <div className={styles.letter}>
                    <p className={styles.letterGreeting}>{activeTab.letter.greeting}</p>
                    <h2 className={styles.letterHeadline}>{activeTab.letter.subheading}</h2>
                    {activeTab.letter.introParagraphs.map((paragraph) => (
                      <p key={paragraph} className={styles.letterParagraph}>
                        {paragraph}
                      </p>
                    ))}
                    <div className={styles.letterPillars}>
                      {activeTab.letter.pillars.map((pillar) => (
                        <div key={pillar.title} className={styles.letterPillar}>
                          <h3 className={styles.letterPillarTitle}>{pillar.title}</h3>
                          <p className={styles.letterPillarText}>{pillar.text}</p>
                        </div>
                      ))}
                    </div>
                    <h3 className={styles.letterSectionTitle}>{activeTab.letter.storyTitle}</h3>
                    {activeTab.letter.storyParagraphs.map((paragraph) => (
                      <p key={paragraph} className={styles.letterParagraph}>
                        {paragraph}
                      </p>
                    ))}
                    <h3 className={styles.letterSectionTitle}>{activeTab.letter.hobbiesTitle}</h3>
                    <ul className={styles.letterHobbyList}>
                      {activeTab.letter.hobbies.map((hobby) => (
                        <li key={hobby}>{hobby}</li>
                      ))}
                    </ul>
                  </div>
                ) : activeTab.id === "skills" ? (
                  <div className={styles.categoryColumn}>
                    {activeTab.categories.map((category) => (
                      <div key={category.title} className={styles.categorySection}>
                        <div className={styles.categoryHeader}>
                          <span className={styles.categoryTitle}>{category.title}</span>
                        </div>
                        <div className={styles.categoryGrid}>
                          {category.items.map((item) => (
                            <div key={item.label} className={styles.simpleSkill}>
                              <span className={styles.simpleSkillIcon}>
                                <item.icon />
                              </span>
                              <span className={styles.simpleSkillLabel}>{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <h2 className={styles.panelHeading}>{activeTab.heading}</h2>
                    {activeTab.id === "resume" && activeTab.resumeUrl ? (
                      <>
                        <div className={styles.resumeActions}>
                          <a
                            href={activeTab.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.resumeLink}
                          >
                            View Resume
                          </a>
                          <a
                            href={activeTab.resumeUrl}
                            download
                            className={styles.resumeLink}
                          >
                            Download PDF
                          </a>
                        </div>
                        <div className={styles.resumeEmbedWrapper}>
                          <iframe
                            src={`${activeTab.resumeUrl}#toolbar=0`}
                            title="Jake Cochran Resume"
                            className={styles.resumeEmbed}
                          />
                        </div>
                      </>
                    ) : (
                      <div className={styles.cardGrid}>
                        {activeTab.cards.map((card, index) => (
                          <div key={`${card.label}-${index}`} className={styles.simpleSkill}>
                            <span className={styles.simpleSkillIcon}>
                              <card.icon />
                            </span>
                            <span className={styles.simpleSkillLabel}>{card.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
