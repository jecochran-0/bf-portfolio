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
                <span className={styles.metaValue}>Webflow</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Live Site</span>
                <Link
                  href="https://trianglesteppingstones.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.metaLink}
                >
                  trianglesteppingstones.com
                </Link>
              </div>
            </div>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>01 — Overview</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.bodyText}>
                Triangle Stepping Stones is a 501(c)(3) recovery clubhouse in Williamsburg, Virginia that hosts 12-step meetings every day of the week. The organization serves as a neutral gathering place for AA, NA, Al-Anon, and other recovery groups—providing meeting space, community connection, and a substance-free environment for people in recovery.
              </p>
              <p className={styles.bodyText}>
                The existing website, while functional, wasn&apos;t optimized for the distinct needs of its three primary user groups. Information was difficult to scan, the meeting schedule was overwhelming, and the site&apos;s design didn&apos;t convey the warmth and accessibility that defines the physical clubhouse experience.
              </p>
              <p className={styles.bodyText}>
                The core insight: A recovery clubhouse website serves users at very different moments in their journey—from someone in crisis searching &quot;AA meetings near me&quot; to a grant officer evaluating organizational credibility. Each needs a fundamentally different experience.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>02 — User Research</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Understanding Three Distinct User Groups</h3>
              <p className={styles.bodyText}>
                Through conversations with board members and analysis of common visitor paths, I identified three primary user groups with distinct needs, mental states, and goals.
              </p>
            </div>

            <div className={styles.userGroupCard}>
              <div className={styles.userGroupHeader}>
                <span className={styles.userGroupEmoji}>🌱</span>
                <h3 className={styles.userGroupTitle}>People Seeking Recovery</h3>
              </div>
              <p className={styles.userGroupDescription}>
                Individuals considering recovery for the first time or looking for a meeting in Williamsburg. They may be in crisis, anxious, or skeptical. This is likely their first touchpoint with TSS.
              </p>
              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>Primary Needs</h4>
                <ul className={styles.list}>
                  <li>Find a meeting quickly (time & location)</li>
                  <li>Understand what to expect</li>
                  <li>Feel welcomed, not judged</li>
                </ul>
              </div>
            </div>

            <div className={styles.userGroupCard}>
              <div className={styles.userGroupHeader}>
                <span className={styles.userGroupEmoji}>📅</span>
                <h3 className={styles.userGroupTitle}>Regular Meeting Attendees</h3>
              </div>
              <p className={styles.userGroupDescription}>
                People already in recovery who attend meetings at TSS. They visit frequently to check the schedule—often on mobile devices, often in a hurry.
              </p>
              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>Primary Needs</h4>
                <ul className={styles.list}>
                  <li>See today&apos;s meetings at a glance</li>
                  <li>Know when the next meeting starts</li>
                  <li>Find specific meeting types (AA, NA, etc.)</li>
                </ul>
              </div>
            </div>

            <div className={styles.userGroupCard}>
              <div className={styles.userGroupHeader}>
                <span className={styles.userGroupEmoji}>🏛️</span>
                <h3 className={styles.userGroupTitle}>Donors & Grant Officers</h3>
              </div>
              <p className={styles.userGroupDescription}>
                Individuals or institutional representatives evaluating TSS for donations or grant funding. They need to assess legitimacy, impact, and organizational health.
              </p>
              <div className={styles.subsection}>
                <h4 className={styles.subsectionTitle}>Primary Needs</h4>
                <ul className={styles.list}>
                  <li>Verify 501(c)(3) status</li>
                  <li>Understand the organization&apos;s mission</li>
                  <li>See evidence of community impact</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>03 — Before State</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Analyzing the Existing Experience</h3>
              <p className={styles.bodyText}>
                The original website had functional content but several UX issues that created friction for all three user groups.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Homepage: Generic Hero, No Clear Action</h3>
              <p className={styles.bodyText}>
                The homepage used a stock photo that didn&apos;t show the actual clubhouse. The primary call-to-action (&quot;Support The Club&quot;) prioritized donations over the core use case: finding a meeting. There was no indication of when the next meeting would occur.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/tss/homepage-before.png"
                  alt="Original TSS homepage with stock photo hero"
                  width={1920}
                  height={1080}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>Original homepage — stock imagery and donation-focused CTA</p>
              </div>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Meeting Schedule: Information Overload</h3>
              <p className={styles.bodyText}>
                The calendar view showed an entire month at once with color-coded events. While comprehensive, this design required significant cognitive load to answer a simple question: &quot;What meeting can I attend today?&quot;
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/tss/meetings-before.png"
                  alt="Original calendar-based meeting view"
                  width={1920}
                  height={1080}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>Original meetings page — dense calendar requires scanning multiple weeks</p>
              </div>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Contact Page: Broken Form, Missing Hours</h3>
              <p className={styles.bodyText}>
                The contact page displayed a visible error (&quot;Contact form not found&quot;) and didn&apos;t include operating hours—critical information for someone planning to visit in person.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/tss/contact-before.png"
                  alt="Original contact page with error message"
                  width={1920}
                  height={1080}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>Contact page showed a broken form error and lacked essential information</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>04 — Design Solutions</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Redesigning for Each User Journey</h3>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>For People Seeking Recovery: Immediate Clarity</h3>
              <p className={styles.bodyText}>
                The new homepage hero features the actual clubhouse building—establishing a visual connection to the physical space newcomers will enter. More importantly, a &quot;Next Meeting&quot; widget displays a live countdown, immediately answering the most urgent question.
              </p>
              <p className={styles.bodyText}>
                The subheading &quot;An independent clubhouse hosting 12-step meetings every day of the week&quot; quickly communicates what TSS is without jargon.
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
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>For Regular Attendees: Scannable Schedule</h3>
              <p className={styles.bodyText}>
                The new Meetings page replaces the monthly calendar with a day-selector interface. Users see today&apos;s date by default, with all meetings displayed as simple cards showing time, meeting name, and type (AA, NA, AFG).
              </p>
              <p className={styles.bodyText}>
                The &quot;Next Meeting&quot; countdown persists here too, providing at-a-glance utility for someone checking the schedule on their phone while driving.
              </p>
              <div className={styles.beforeAfterGrid}>
                <div className={styles.beforeAfterCard}>
                  <span className={styles.beforeAfterLabel}>Before</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/tss/meetings-before.png"
                      alt="Original meetings calendar"
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
                      alt="Redesigned meetings page"
                      width={1920}
                      height={1080}
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
              <p className={styles.bodyText}>
                The &quot;New to Meetings?&quot; section on the meetings page addresses common anxieties: &quot;Do I have to talk?&quot; (No.) &quot;What should I expect?&quot; (Coffee, shared stories, no pressure.) This reduces the fear of the unknown that keeps many people from attending their first meeting.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/tss/homepage-after-2.png"
                  alt="New to Meetings section on meetings page"
                  width={1920}
                  height={1080}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>New to Meetings? section addressing first-timer anxieties</p>
              </div>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>For Donors, Volunteers, and Grant Officers: Credibility Signals</h3>
              <p className={styles.bodyText}>
                The About page now includes concrete impact metrics: 14 years serving Williamsburg, 25 meetings every week, 7 different meeting types. The footer displays the EIN number (30-0662248), critical for grant applications and tax-deductible donations.
              </p>
              <p className={styles.bodyText}>
                Real photos of members and the clubhouse interior replace generic stock imagery, conveying authenticity and community.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/tss/meetings-after.png"
                  alt="Redesigned about page"
                  width={1920}
                  height={1080}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>History section with impact metrics</p>
              </div>
              <p className={styles.bodyText}>
                The volunteer form streamlines the intake process, allowing volunteers to self-select their interests and reducing back-and-forth for the organization.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/tss/volunteer-form-final.png"
                  alt="Volunteer form"
                  width={1920}
                  height={1080}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>Volunteer intake form</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>05 — Key UX Improvements</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Changes That Matter</h3>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>1</div>
              <h3 className={styles.improvementTitle}>Live &quot;Next Meeting&quot; Countdown</h3>
              <p className={styles.improvementText}>
                Displayed prominently on both the homepage and meetings page, this widget answers the most common question instantly. No scanning, no mental math with time zones.
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>2</div>
              <h3 className={styles.improvementTitle}>Day-Based Meeting View</h3>
              <p className={styles.improvementText}>
                Replaced the overwhelming monthly calendar with a simple day selector. Users see today&apos;s meetings by default—the information 90% of visitors actually need.
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>3</div>
              <h3 className={styles.improvementTitle}>Authentic Photography</h3>
              <p className={styles.improvementText}>
                Replaced stock photos with real images of the clubhouse building and members. This builds trust and gives newcomers a visual preview of what they&apos;ll find.
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>4</div>
              <h3 className={styles.improvementTitle}>Newcomer FAQ Section</h3>
              <p className={styles.improvementText}>
                Added &quot;New to Meetings?&quot; content addressing first-timer anxieties. &quot;Do I have to talk?&quot; and &quot;What should I expect?&quot; reduce barriers to attendance.
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>5</div>
              <h3 className={styles.improvementTitle}>Streamlined Navigation</h3>
              <p className={styles.improvementText}>
                Reduced navigation from 7 items to 4 (Home, Meetings, About, Volunteer) with a prominent &quot;Donate Now&quot; CTA. Removed redundant pages and consolidated content.
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>6</div>
              <h3 className={styles.improvementTitle}>Operating Hours in Footer</h3>
              <p className={styles.improvementText}>
                Added clubhouse hours (8:30 AM – 9:00 PM daily), address, and EIN number to every page. Essential information is always one scroll away.
              </p>
            </div>

            <div className={styles.improvementCard}>
              <div className={styles.improvementNumber}>7</div>
              <h3 className={styles.improvementTitle}>Working Volunteer Form</h3>
              <p className={styles.improvementText}>
                Created a dedicated Volunteer page with a proper intake form. Checkbox options for volunteer types (Housekeeping, Grounds-keeping, Leadership, Membership) streamline the process for both volunteers and staff.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>06 — New Functionality</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Volunteer Experience</h3>
              <p className={styles.bodyText}>
                The original site buried volunteer information in a bullet list on the Support page. The redesign elevates volunteering to a first-class navigation item with its own dedicated experience.
              </p>
              <p className={styles.bodyText}>
                The hero section uses a photo of actual TSS members and presents volunteer opportunities as clear, iconographic cards. The form below captures contact information and lets volunteers self-select their interests—reducing back-and-forth for the organization.
              </p>
              <div className={styles.beforeAfterGrid}>
                <div className={styles.beforeAfterCard}>
                  <span className={styles.beforeAfterLabel}>Hero</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/tss/volunteer-hero.png"
                      alt="Volunteer page hero"
                      width={1920}
                      height={1080}
                      className={styles.image}
                    />
                  </div>
                </div>
                <div className={styles.beforeAfterCard}>
                  <span className={styles.beforeAfterLabel}>Form</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/tss/volunteer-form.png"
                      alt="Volunteer intake form"
                      width={1920}
                      height={1080}
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>07 — Information Architecture</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Footer as Utility</h3>
              <p className={styles.bodyText}>
                The redesigned footer serves as a persistent reference panel containing the three pieces of information most commonly sought: physical address, operating hours, and contact email. The EIN number establishes nonprofit credibility for grant officers and donors.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/tss/footer-after.png"
                  alt="Redesigned footer with essential information"
                  width={1920}
                  height={1080}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>Footer displays address, hours, email, EIN, and social links</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>08 — Technical Implementation</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Empowering Board Members with a CMS</h3>
              <p className={styles.bodyText}>
                A beautiful meeting display means nothing if the underlying data is stale. The original site relied on a third-party calendar plugin that was difficult to update and visually inconsistent with the rest of the design.
              </p>
              <p className={styles.bodyText}>
                For the redesign, I built a custom CMS collection in Webflow specifically for meetings. Each meeting is a CMS item with structured fields: name, day of week, start time, meeting type (AA, NA, AFG, etc.), and optional description.
              </p>
              <p className={styles.bodyText}>
                The result: Any board member can now add, edit, or remove meetings directly in Webflow&apos;s editor—no developer needed. Changes go live immediately, and the &quot;Next Meeting&quot; countdown automatically pulls from the same data source.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>How It Works</h3>
              <p className={styles.bodyText}>
                The Meetings page uses Webflow&apos;s CMS filtering to display only meetings for the selected day. The &quot;Next Meeting&quot; widget runs a simple calculation comparing the current time against all meeting start times to find and display the soonest upcoming meeting.
              </p>
              <p className={styles.bodyText}>
                This approach ensures consistency: there&apos;s a single source of truth for meeting data, eliminating the risk of the homepage showing different information than the meetings page.
              </p>
            </div>

            <div className={styles.subsection}>
              <ul className={styles.list}>
                <li>
                  <strong>No Technical Skills Required:</strong> Board members update meetings through Webflow&apos;s visual editor—just fill in form fields and publish.
                </li>
                <li>
                  <strong>Instant Updates:</strong> Meeting changes (new times, cancelled meetings, special events) reflect immediately across the entire site.
                </li>
                <li>
                  <strong>Structured Data:</strong> Meeting type badges (AA, NA, AFG) are automatically color-coded based on the CMS field—no manual styling needed.
                </li>
                <li>
                  <strong>Future-Proof:</strong> Adding a new meeting type or changing the display format requires updating the design once, not editing every individual meeting.
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>09 — Impact</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Designed for Recovery</h3>
              <p className={styles.bodyText}>
                The redesigned website better serves all three user groups by prioritizing their distinct needs within a cohesive experience.
              </p>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>7→4</div>
                <div className={styles.statLabel}>Navigation items reduced</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>0→1</div>
                <div className={styles.statLabel}>Clicks to see next meeting</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>100%</div>
                <div className={styles.statLabel}>Authentic photography</div>
              </div>
            </div>

            <div className={styles.subsection}>
              <p className={styles.bodyText}>
                For people seeking recovery, the site now answers &quot;When is the next meeting?&quot; immediately, shows them the actual building they&apos;ll be visiting, and addresses their anxieties about attending.
              </p>
              <p className={styles.bodyText}>
                For regular attendees, checking the schedule takes seconds instead of requiring navigation through a dense calendar.
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

