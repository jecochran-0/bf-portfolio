import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export default function BridgesToSciencePage() {
  return (
    <div data-shell-content className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.category}>UX Case Study</p>
          <h1 className={styles.title}>Bridges to Science</h1>
          <p className={styles.subtitle}>
            Reframing a nonprofit website into a donor-first persuasion sequence
            that supports fundraising and partnership conversion.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <Link
                href="https://www.figma.com/design/NrlFpR5oojxrS2BdK46Vq9/Bridges-To-Science?node-id=25-96&t=GvOCtS8lIhHQ8af2-1"
                target="_blank"
                rel="noreferrer"
                className={styles.figmaButton}
              >
                View Figma File →
              </Link>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Client</span>
              <span className={styles.metaValue}>
                Bridges to Science (Houston 501(c)(3))
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>3 weeks</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>
                Sole UX/UI Designer (via Catchafire)
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Tools</span>
              <span className={styles.metaValue}>Figma</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Platform</span>
              <span className={styles.metaValue}>Figma</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.bodyText}>
            The original multi-page website treated every audience the same, even
            though the organization&apos;s primary digital goal was donor and
            institutional partner conversion. Program participants still needed
            information, but as a secondary layer after the core fundraising
            narrative.
          </p>
          <p className={styles.bodyText}>
            I was given the existing brand identity, a prioritized content
            spreadsheet, and full creative ownership to redesign the experience
            around conversion.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Identifying the Problems</h2>
          <div className={styles.problemGrid}>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>No persuasion architecture</h3>
              <p className={styles.cardText}>
                Content was organized by categories, not by the psychological
                steps that move someone from awareness to donation intent.
              </p>
            </article>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>Donation was an afterthought</h3>
              <p className={styles.cardText}>
                The only path to donate was a text link to a third-party flow,
                with no emotional framing or momentum before the conversion step.
              </p>
            </article>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                IA reflected org chart, not user intent
              </h3>
              <p className={styles.cardText}>
                The structure mirrored internal organization categories instead of
                what a donor needed to understand and feel first.
              </p>
            </article>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                Audiences competed instead of being sequenced
              </h3>
              <p className={styles.cardText}>
                Donors, partners, volunteers, and participating families were all
                asked to self-sort in one undifferentiated experience.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Designing the Solution: IA as a Persuasion Sequence
          </h2>
          <ol className={styles.sequenceList}>
            <li>
              <strong>Emotional hook and problem framing:</strong> Opened with
              Houston&apos;s tech growth versus education gap to establish urgency
              before any ask.
            </li>
            <li>
              <strong>Human story and identification:</strong> Added a student
              spotlight to move from abstract statistics to personal
              transformation.
            </li>
            <li>
              <strong>Credibility signals before ask:</strong> Surfaced
              collaborators and media coverage to reduce perceived donation risk.
            </li>
            <li>
              <strong>Impact metrics:</strong> Positioned scannable evidence
              blocks to answer the rational question: &quot;What have they
              accomplished?&quot;
            </li>
            <li>
              <strong>Testimonial near conversion:</strong> Placed a parent quote
              directly before the form to reinforce intent at the final decision
              point.
            </li>
            <li>
              <strong>Embedded donation with concrete tiers:</strong> Kept the
              donation form on-page with impact-based tier framing
              ($15/$50/$100/$500).
            </li>
            <li>
              <strong>Secondary paths after donation:</strong> Partnership and
              volunteer content appears after the primary donor conversion moment.
            </li>
            <li>
              <strong>Programs last but complete:</strong> Full participant
              information remains available for families who continue scrolling.
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Accessibility and Responsiveness</h2>
          <p className={styles.bodyText}>
            I adjusted the brand palette to meet WCAG 2.1 AA contrast while
            preserving visual identity. For a nonprofit serving underserved
            communities, accessibility needed to be a baseline requirement.
          </p>
          <p className={styles.bodyText}>
            Desktop used stronger spatial hierarchy (horizontal donation tiers,
            structured volunteer grid, scannable impact blocks). Mobile adapted
            these patterns into stacked tiers, card-based volunteer roles, and a
            compact metrics layout while preserving the same persuasion order.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Design</h2>
          <div className={styles.designCard}>
            <div className={styles.thumbnailWrap}>
              <Image
                src="/bridges-to-science/loading-screen-thumbnail.png"
                alt="Bridges to Science loading screen concept"
                width={1200}
                height={750}
                className={styles.thumbnail}
              />
            </div>
            <p className={styles.cardText}>
              Full desktop and mobile layouts are available in the exported design
              files below.
            </p>
            <div className={styles.linkRow}>
              <Link
                href="/bridges-to-science/desktop-design-final.png"
                target="_blank"
                rel="noreferrer"
                className={styles.fileLink}
              >
                View Desktop Design Image
              </Link>
              <Link
                href="/bridges-to-science/mobile-design-final.png"
                target="_blank"
                rel="noreferrer"
                className={styles.fileLink}
              >
                View Mobile Design Image
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I&apos;d Add With More Time</h2>
          <ul className={styles.bulletList}>
            <li>
              Usability testing with 2-3 potential donors to validate the
              persuasion sequence and donation form before handoff.
            </li>
            <li>
              A/B testing framework for donation tier structures to optimize
              conversion post-launch.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
