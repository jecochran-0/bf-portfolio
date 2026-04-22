import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function TriangleSteppingStonesPage() {
  return (
    <>
      <div data-shell-content className={styles.page}>
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.category}>UX Case Study</p>
            <h1 className={styles.title}>
              Redesigning Triangle Stepping Stones for the Recovery Community
            </h1>
            <p className={styles.subtitle}>
              How user-centered design transformed a recovery clubhouse website to better serve people seeking help, regular attendees, and potential supporters.
            </p>

            <div className={styles.metaGrid}>
              <div className={styles.metaCard}>
                <Link
                  href="https://trianglesteppingstones.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.liveSiteButton}
                >
                  View Live Site →
                </Link>
                <Link
                  href="https://www.figma.com/design/vR13dGYhoQZELVP4MEz3Xv/Triangle-Stepping-Stone-Design?node-id=0-1&t=1iZQyPJJLTo0Hn1Q-1"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.figmaButton}
                >
                  View Original Figma File →
                </Link>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>Triangle Stepping Stones</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>2 weeks</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>UX Designer & Developer</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Platform</span>
                <span className={styles.metaValue}>Webflow + CMS</span>
              </div>
            </div>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>TL;DR</h2>
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>The 30-second version</h3>
              <p className={styles.bodyText}>
                Replaced an overwhelming monthly calendar with a day-based meeting finder, added a live &quot;Next Meeting&quot; countdown visible on every page, and built a Webflow CMS so board members can update meetings without a developer. The result: someone looking for a meeting can now find one in under 5 seconds.
              </p>
            </div>

            <div className={styles.beforeAfterGrid}>
              <div className={styles.beforeAfterCard}>
                <span className={styles.beforeAfterLabel}>Before</span>
                <div className={styles.imageContainer}>
                  <Image
                    src="/tss/meetings-before.png"
                    alt="Original calendar view"
                    width={1920}
                    height={1080}
                    className={styles.image}
                  />
                </div>
              </div>
              <div className={styles.beforeAfterCard}>
                <span className={styles.beforeAfterLabel}>After</span>
                <div className={styles.imageContainer}>
                  <Image
                    src="/tss/meetings-after-correct.png"
                    alt="Redesigned day-based view"
                    width={1920}
                    height={1080}
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>01. The Problem</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Three Users, One Website</h3>
              <p className={styles.bodyText}>
                Triangle Stepping Stones is a 501(c)(3) recovery clubhouse in Williamsburg, Virginia hosting 12-step meetings every day. The existing website worked, but it wasn&apos;t optimized for the distinct needs of its three primary audiences.
              </p>
            </div>

            <div className={styles.userGroupCard}>
              <div className={styles.userGroupHeader}>
                <h3 className={styles.userGroupTitle}>People Seeking Recovery</h3>
              </div>
              <p className={styles.userGroupDescription}>
                May be in crisis. First touchpoint with TSS. Needs answers fast.
              </p>
              <ul className={styles.list}>
                <li>Find a meeting now</li>
                <li>Know what to expect</li>
              </ul>
            </div>

            <div className={styles.userGroupCard}>
              <div className={styles.userGroupHeader}>
                <h3 className={styles.userGroupTitle}>Regular Attendees</h3>
              </div>
              <p className={styles.userGroupDescription}>
                Already in recovery. Checks schedule frequently, often on mobile.
              </p>
              <ul className={styles.list}>
                <li>See today&apos;s meetings</li>
                <li>Next meeting countdown</li>
              </ul>
            </div>

            <div className={styles.userGroupCard}>
              <div className={styles.userGroupHeader}>
                <h3 className={styles.userGroupTitle}>Donors & Grant Officers</h3>
              </div>
              <p className={styles.userGroupDescription}>
                Evaluating TSS for funding. Needs credibility signals.
              </p>
              <ul className={styles.list}>
                <li>Verify 501(c)(3) status</li>
                <li>See community impact</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <p className={styles.bodyText}>
                The core insight: A recovery clubhouse website serves users at very different moments. From someone in crisis searching &quot;AA meetings near me&quot; to a grant officer evaluating organizational credibility, each needs a fundamentally different experience. But the original site treated them all the same.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>02. The Redesign</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Designing for Each Journey</h3>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>For People Seeking Recovery: Immediate Answers</h3>
              <p className={styles.bodyText}>
                The new homepage features the actual clubhouse building (not stock photos) and a &quot;Next Meeting&quot; countdown that immediately answers the most urgent question. No scanning, no mental math.
              </p>
              <div className={styles.beforeAfterGrid}>
                <div className={styles.beforeAfterCard}>
                  <span className={styles.beforeAfterLabel}>Before</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/tss/homepage-before.png"
                      alt="Original homepage"
                      width={1920}
                      height={1080}
                      className={styles.image}
                    />
                  </div>
                </div>
                <div className={styles.beforeAfterCard}>
                  <span className={styles.beforeAfterLabel}>After</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/tss/homepage-after-1.png"
                      alt="Redesigned homepage"
                      width={1920}
                      height={1080}
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
              <p className={styles.bodyText}>
                Stock photo → actual clubhouse. Donation CTA → meeting countdown.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>For Regular Attendees: Scannable Schedule</h3>
              <p className={styles.bodyText}>
                The monthly calendar view required significant cognitive load to answer &quot;What meeting can I attend today?&quot; The redesigned meetings page shows today&apos;s meetings by default, which is the information 90% of visitors actually need.
              </p>
              <div className={styles.beforeAfterGrid}>
                <div className={styles.beforeAfterCard}>
                  <span className={styles.beforeAfterLabel}>Before</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/tss/meetings-before.png"
                      alt="Original calendar"
                      width={1920}
                      height={1080}
                      className={styles.image}
                    />
                  </div>
                </div>
                <div className={styles.beforeAfterCard}>
                  <span className={styles.beforeAfterLabel}>After</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/tss/meetings-after-correct.png"
                      alt="Redesigned meetings"
                      width={1920}
                      height={1080}
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
              <p className={styles.bodyText}>
                Dense monthly calendar → simple day selector with meeting cards.
              </p>
              <p className={styles.bodyText}>
                I also added a &quot;New to Meetings?&quot; section addressing first-timer anxieties: &quot;Do I have to talk?&quot; (No.) &quot;What should I expect?&quot; (Coffee, shared stories, no pressure.) This reduces the fear that keeps many people from attending their first meeting.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>For Donors, Volunteers, and Officers: New Elements and Credibility Signals</h3>
              <p className={styles.bodyText}>
                The footer displays the EIN number on every page, critical for grant applications. A prominent &quot;Donate Now&quot; CTA in the navbar makes it easy for supporters to contribute from any page. The volunteer form streamlines the intake process, allowing volunteers to self-select their interests and reducing back-and-forth for the organization.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/tss/footer-after.png"
                  alt="Redesigned footer with credibility signals"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className={styles.image}
                />
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/tss/volunteer-form-after.png"
                  alt="Volunteer form"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className={styles.image}
                />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>03. Technical Solution</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Empowering Board Members with a CMS</h3>
              <p className={styles.bodyText}>
                A beautiful meeting display means nothing if the data is stale. The original site used a third-party calendar plugin that was difficult to update. I built a custom Webflow CMS collection where each meeting is an item with structured fields: name, day, time, and type (AA, NA, AFG).
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>✓</div>
              <h3 className={styles.improvementTitle}>No Technical Skills Required</h3>
              <p className={styles.improvementText}>
                Board members update meetings through Webflow&apos;s visual editor.
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>✓</div>
              <h3 className={styles.improvementTitle}>Instant Updates</h3>
              <p className={styles.improvementText}>
                Changes reflect immediately across the entire site.
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>✓</div>
              <h3 className={styles.improvementTitle}>Single Source of Truth</h3>
              <p className={styles.improvementText}>
                Homepage countdown and meetings page pull from the same data.
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>✓</div>
              <h3 className={styles.improvementTitle}>Future-Proof</h3>
              <p className={styles.improvementText}>
                Adding a meeting type updates the design once, not every item.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>04. Impact</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Designed for Recovery</h3>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>7→4</div>
                <div className={styles.statLabel}>Navigation Items</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>0→1</div>
                <div className={styles.statLabel}>Clicks to Next Meeting</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>100%</div>
                <div className={styles.statLabel}>Authentic Photography</div>
              </div>
            </div>

            <div className={styles.subsection}>
              <p className={styles.bodyText}>
                For people seeking recovery, the site now answers &quot;When is the next meeting?&quot; immediately and shows them the actual building they&apos;ll be visiting.
              </p>
              <p className={styles.bodyText}>
                For regular attendees, checking the schedule takes seconds instead of scanning a dense calendar.
              </p>
              <p className={styles.bodyText}>
                For donors and grant officers, the site conveys legitimacy through professional design, concrete metrics, and visible nonprofit credentials.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
