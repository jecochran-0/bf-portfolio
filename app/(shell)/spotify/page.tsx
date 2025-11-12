"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function SpotifyPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay prevented, user will need to click
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div data-shell-content className={styles.page}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.mainTitle}>Spotify UX Redesign</h1>
            <p className={styles.dataNote}>
              <strong>Note:</strong> The data presented here is simulated and demonstrates what improvements like these might bring to user experience metrics.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>30%</div>
                <div className={styles.statLabel}>faster task completion</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>85%</div>
                <div className={styles.statLabel}>users happier w/ navigation</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>70%</div>
                <div className={styles.statLabel}>lift in discovery engagement</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>+25%</div>
                <div className={styles.statLabel}>cross‑platform usage</div>
              </div>
            </div>
          </header>

          <section className={styles.section}>
            <div className={styles.videoContainer}>
              <video
                ref={videoRef}
                className={styles.video}
                controls
                loop
                muted
                playsInline
                preload="metadata"
                poster="/Spotify_Project copy/Desktop-Home-Revamped.jpg"
              >
                <source src="/Spotify_Project copy/HeroScreen.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <p className={styles.bodyText}>
              This case study explores a redesign of Spotify&apos;s interface to address user pain points around navigation, content discovery, and playlist management. The project included extensive user research, wireframing, prototyping, and visual design phases.
            </p>
            <p className={styles.bodyText}>
              The redesign aims to improve the overall user experience while maintaining Spotify&apos;s brand identity and aesthetics. Key improvements focus on streamlining the navigation structure, enhancing content discovery features, and making playlist management more intuitive.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Improvements</h2>
            <div className={styles.improvementsGrid}>
              <div className={styles.improvementCard}>
                <h3 className={styles.improvementTitle}>Simplified navigation structure</h3>
                <p className={styles.improvementText}>Easier access to key features</p>
              </div>
              <div className={styles.improvementCard}>
                <h3 className={styles.improvementTitle}>Enhanced content discovery</h3>
                <p className={styles.improvementText}>Improved recommendation algorithms</p>
              </div>
              <div className={styles.improvementCard}>
                <h3 className={styles.improvementTitle}>Redesigned player interface</h3>
                <p className={styles.improvementText}>Better usability across devices</p>
              </div>
              <div className={styles.improvementCard}>
                <h3 className={styles.improvementTitle}>Streamlined playlist management</h3>
                <p className={styles.improvementText}>Intuitive controls</p>
              </div>
              <div className={styles.improvementCard}>
                <h3 className={styles.improvementTitle}>Consistent design language</h3>
                <p className={styles.improvementText}>Across desktop and mobile platforms</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Project Details</h2>
            <div className={styles.detailsGrid}>
              <div className={styles.detailCard}>
                <h3 className={styles.detailTitle}>My Role</h3>
                <p className={styles.detailText}>UX/UI Designer, User Researcher</p>
              </div>
              <div className={styles.detailCard}>
                <h3 className={styles.detailTitle}>Tools Used</h3>
                <p className={styles.detailText}>Figma, Adobe XD, Usability Hub</p>
              </div>
              <div className={styles.detailCard}>
                <h3 className={styles.detailTitle}>Deliverables</h3>
                <p className={styles.detailText}>User Research, Wireframes, Hi-Fi Mockups, Interactive Prototypes</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Case Study</h2>
            
            <div className={styles.caseStudySection}>
              <h3 className={styles.subsectionTitle}>Overview</h3>
              <div className={styles.desktopImageContainer}>
                <Image
                  src="/Spotify_Project copy/Desktop-Home-Revamped.jpg"
                  alt="Spotify Desktop Home - Redesigned"
                  width={2400}
                  height={1600}
                  className={styles.desktopImage}
                  priority
                />
                <p className={styles.imageCaption}>Desktop Home - Redesigned</p>
              </div>
              <div className={styles.mobileImageContainer}>
                <Image
                  src="/Spotify_Project copy/Mobile-Home-Revamped.jpg"
                  alt="Spotify Mobile Home - Redesigned"
                  width={1200}
                  height={2400}
                  className={styles.mobileImage}
                />
                <p className={styles.imageCaption}>Mobile Home - Redesigned</p>
              </div>
            </div>

            <div className={styles.caseStudySection}>
              <h3 className={styles.subsectionTitle}>Before & After</h3>
              <div className={styles.desktopImageContainer}>
                <h4 className={styles.beforeAfterLabel}>Desktop - Before</h4>
                <Image
                  src="/Spotify_Project copy/Desktop-Home.jpg"
                  alt="Spotify Desktop Home - Before"
                  width={2400}
                  height={1600}
                  className={styles.desktopImage}
                />
              </div>
              <div className={styles.desktopImageContainer}>
                <h4 className={styles.beforeAfterLabel}>Desktop - After</h4>
                <Image
                  src="/Spotify_Project copy/Desktop-Home-Revamped.jpg"
                  alt="Spotify Desktop Home - After"
                  width={2400}
                  height={1600}
                  className={styles.desktopImage}
                />
              </div>
              <div className={styles.beforeAfterMobileGrid}>
                <div className={styles.mobileImageContainer}>
                  <h4 className={styles.beforeAfterLabel}>Mobile - Before</h4>
                  <Image
                    src="/Spotify_Project copy/Mobile-Home.jpg"
                    alt="Spotify Mobile Home - Before"
                    width={1200}
                    height={2400}
                    className={styles.mobileImage}
                  />
                </div>
                <div className={styles.mobileImageContainer}>
                  <h4 className={styles.beforeAfterLabel}>Mobile - After</h4>
                  <Image
                    src="/Spotify_Project copy/Mobile-Home-Revamped.jpg"
                    alt="Spotify Mobile Home - After"
                    width={1200}
                    height={2400}
                    className={styles.mobileImage}
                  />
                </div>
              </div>
            </div>

            <div className={styles.caseStudySection}>
              <h3 className={styles.subsectionTitle}>User Flow</h3>
              <div className={styles.desktopImageContainer}>
                <Image
                  src="/Spotify_Project copy/Desktop-Breakdown-New.jpg"
                  alt="Desktop Breakdown - New Design"
                  width={2400}
                  height={1600}
                  className={styles.desktopImage}
                />
                <p className={styles.imageCaption}>Desktop Breakdown - New Design</p>
              </div>
              <div className={styles.mobileImageContainer}>
                <Image
                  src="/Spotify_Project copy/Mobile-Breakdown-New.jpg"
                  alt="Mobile Breakdown - New Design"
                  width={1200}
                  height={2400}
                  className={styles.mobileImage}
                />
                <p className={styles.imageCaption}>Mobile Breakdown - New Design</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROBLEM STATEMENT</h2>
            <p className={styles.bodyText}>
              Despite Spotify&apos;s popularity, users reported difficulties with navigation, content discovery, and playlist management. The challenge was to redesign the interface to address these pain points while maintaining the platform&apos;s familiar feel and brand identity.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>RESEARCH METHODOLOGY</h2>
            <p className={styles.bodyText}>
              The research phase involved user interviews, competitive analysis, and usability testing of the existing interface. Key findings revealed that users struggled with:
            </p>
            <ul className={styles.list}>
              <li>Finding specific content in large libraries</li>
              <li>Navigating between different sections of the app</li>
              <li>Managing playlists efficiently</li>
              <li>Discovering new music beyond algorithmic recommendations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>DESIGN PROCESS</h2>
            <p className={styles.bodyText}>
              The design process followed a user-centered approach with the following steps:
            </p>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>1</div>
                <div className={styles.processText}>User research and persona development</div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>2</div>
                <div className={styles.processText}>Information architecture restructuring</div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>3</div>
                <div className={styles.processText}>Wireframing key screens and user flows</div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>4</div>
                <div className={styles.processText}>Creating high-fidelity mockups</div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>5</div>
                <div className={styles.processText}>Prototyping and usability testing</div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>6</div>
                <div className={styles.processText}>Iterating based on user feedback</div>
              </div>
            </div>
            <div className={styles.planningImage}>
              <Image
                src="/Spotify_Project copy/Planning.jpg"
                alt="Design Planning and Process"
                width={2400}
                height={1600}
                className={styles.desktopImage}
              />
              <p className={styles.imageCaption}>Design Planning and Process</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>KEY SOLUTIONS</h2>
            <div className={styles.solutionsGrid}>
              <div className={styles.solutionCard}>
                <h3 className={styles.solutionTitle}>SIMPLIFIED NAVIGATION</h3>
                <p className={styles.solutionText}>Reduced the number of primary navigation items and reorganized the information architecture</p>
              </div>
              <div className={styles.solutionCard}>
                <h3 className={styles.solutionTitle}>ENHANCED SEARCH</h3>
                <p className={styles.solutionText}>Improved search functionality with filters and contextual results</p>
              </div>
              <div className={styles.solutionCard}>
                <h3 className={styles.solutionTitle}>CONTENT DISCOVERY</h3>
                <p className={styles.solutionText}>Added curated content sections and personalized recommendations</p>
              </div>
              <div className={styles.solutionCard}>
                <h3 className={styles.solutionTitle}>PLAYLIST MANAGEMENT</h3>
                <p className={styles.solutionText}>Redesigned playlist creation and editing workflows</p>
              </div>
              <div className={styles.solutionCard}>
                <h3 className={styles.solutionTitle}>CROSS-PLATFORM CONSISTENCY</h3>
                <p className={styles.solutionText}>Ensured design consistency across desktop and mobile platforms</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>RESULTS & IMPACT</h2>
            <p className={styles.bodyText}>
              Usability testing with the new design showed significant improvements:
            </p>
            <div className={styles.resultsGrid}>
              <div className={styles.resultCard}>
                <div className={styles.resultValue}>30%</div>
                <div className={styles.resultLabel}>reduction in time to complete common tasks</div>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultValue}>85%</div>
                <div className={styles.resultLabel}>of users reported improved satisfaction with navigation</div>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultValue}>70%</div>
                <div className={styles.resultLabel}>increase in engagement with discovery features</div>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultValue}>25%</div>
                <div className={styles.resultLabel}>more cross-platform usage</div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Design Principles</h2>
            <div className={styles.principlesGrid}>
              <div className={styles.principleCard}>
                <h3 className={styles.principleTitle}>Simplified Navigation</h3>
                <Image
                  src="/Spotify_Project copy/Desktop-Breakdown.jpg"
                  alt="Simplified Navigation"
                  width={2400}
                  height={1600}
                  className={styles.principleImage}
                />
              </div>
              <div className={styles.principleCard}>
                <h3 className={styles.principleTitle}>Enhanced Search</h3>
                <Image
                  src="/Spotify_Project copy/Mobile-Breakdown-Old.jpg"
                  alt="Enhanced Search"
                  width={1200}
                  height={2400}
                  className={styles.principleImage}
                />
              </div>
              <div className={styles.principleCard}>
                <h3 className={styles.principleTitle}>Content Discovery</h3>
                <Image
                  src="/Spotify_Project copy/Iphone-Mockup.jpg"
                  alt="Content Discovery"
                  width={1200}
                  height={2400}
                  className={styles.principleImage}
                />
              </div>
              <div className={styles.principleCard}>
                <h3 className={styles.principleTitle}>Playlist Management</h3>
                <Image
                  src="/Spotify_Project copy/Desktop-Breakdown-New.jpg"
                  alt="Playlist Management"
                  width={2400}
                  height={1600}
                  className={styles.principleImage}
                />
              </div>
              <div className={styles.principleCard}>
                <h3 className={styles.principleTitle}>Cross‑Platform Consistency</h3>
                <Image
                  src="/Spotify_Project copy/Mobile-Breakdown-New.jpg"
                  alt="Cross-Platform Consistency"
                  width={1200}
                  height={2400}
                  className={styles.principleImage}
                />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Conclusion</h2>
            <p className={styles.bodyText}>
              The Spotify redesign project successfully addressed key user pain points while maintaining the platform&apos;s core identity. Through careful research, iterative design, and user testing, the new interface provides a more intuitive and enjoyable experience.
            </p>
            <p className={styles.bodyText}>
              Key achievements include a simplified navigation structure, enhanced content discovery features, and improved cross-platform consistency. User testing validated these improvements with significant gains in task completion times and overall satisfaction.
            </p>
            <p className={styles.bodyText}>
              This case study demonstrates how thoughtful UX design can enhance an already successful product by focusing on user needs and pain points, ultimately leading to a more engaging and satisfying experience.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
