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
              <span className={styles.metaValue}>Responsive web (desktop + mobile)</span>
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
          <p className={styles.bodyText}>
            Before designing anything, I audited the existing site through the lens
            of the client&apos;s stated priority: donor and partner conversion.
            Several structural problems stood out:
          </p>
          <div className={styles.problemGrid}>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>No persuasion architecture</h3>
              <p className={styles.cardText}>
                The site presented information but never built a case. There was no
                narrative flow guiding a potential donor from &quot;what is this
                organization?&quot; to &quot;I should give them money.&quot; Content
                was organized by category (about, programs, get involved), not by
                the psychological steps someone takes before donating.
              </p>
            </article>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>Donation was an afterthought</h3>
              <p className={styles.cardText}>
                The only path to giving was a text link to a third-party platform.
                There was no emotional context, no framing of impact, and no reason
                to choose a specific amount. The conversion moment happened off-site
                with zero momentum behind it.
              </p>
            </article>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                Information architecture served the org chart, not the user
              </h3>
              <p className={styles.cardText}>
                The multi-page structure reflected internal organization
                categories rather than what a visitor needed to understand and feel
                before taking action.
              </p>
            </article>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                Audiences competed instead of being sequenced
              </h3>
              <p className={styles.cardText}>
                Donors, partners, volunteers, and participating families all shared
                the same undifferentiated interface. Without audience
                prioritization, the site asked everyone to self-sort, which usually
                increases bounce and reduces action.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Designing the Solution
          </h2>
          <h3 className={styles.subsectionTitle}>
            Information Architecture: Building a Persuasion Sequence
          </h3>
          <p className={styles.bodyText}>
            The most important decision wasn&apos;t visual, it was structural. I
            redesigned the page as a linear persuasion sequence where each section
            builds on the previous one to move a donor from awareness to action.
          </p>
          <ol className={styles.sequenceList}>
            <li>
              <strong>Emotional hook - Problem framing:</strong> The page opens
              with the tension between Houston&apos;s booming tech sector (40% job
              growth) and its education gap (only 43% of 8th graders meeting math
              standards). This gap-analysis framing creates urgency before any ask.
            </li>
            <li>
              <strong>Human story - Identification:</strong> A student spotlight
              (&quot;Meet Nick&quot;) puts a face on the problem. This uses the
              identifiable victim effect, moving from abstract need to personal
              transformation.
            </li>
            <li>
              <strong>Credibility signals - Trust building:</strong> Collaborators
              (Scratch Foundation, Texas A&amp;M) and NBC Nightly News appear
              before any ask, providing third-party validation that reduces
              perceived risk.
            </li>
            <li>
              <strong>Impact metrics - Evidence of scale:</strong> Concrete numbers
              (5,000+ students, 50+ partner organizations, 500+ tech kits) answer
              the rational question: &quot;What have they done?&quot; Metrics are
              scannable because donors skim for evidence.
            </li>
            <li>
              <strong>Testimonial - Peer confirmation:</strong> A parent quote
              bridges the evidence section and the donation form, so the last
              message before the ask reinforces intent.
            </li>
            <li>
              <strong>Donation form - Conversion with anchoring:</strong> The form
              is embedded directly in-page to preserve momentum. Each amount is
              tied to an outcome ($15 field trip, $100 microscope, $500 robotics
              set), using anchoring and concreteness.
            </li>
            <li>
              <strong>Partnership and volunteer paths - Secondary conversion:</strong>{" "}
              These paths are detailed enough to convert, but intentionally placed
              after donation to preserve hierarchy.
            </li>
            <li>
              <strong>Programs - Participant information:</strong> Full program
              details remain available at the end so participating families still
              find what they need.
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Persuasion Sequence in the UI</h2>
          <div className={styles.imageGrid}>
            <figure className={styles.imageCard}>
              <Image
                src="/bridges-to-science/section-emotional-hook.png"
                alt="Emotional hook and problem framing section"
                width={1600}
                height={900}
                className={styles.caseImage}
              />
              <figcaption className={styles.imageCaption}>
                Emotional hook and problem framing (40% growth vs 43% math
                standards).
              </figcaption>
            </figure>
            <figure className={styles.imageCard}>
              <Image
                src="/bridges-to-science/section-meet-nick.png"
                alt="Meet Nick student spotlight section"
                width={1600}
                height={900}
                className={styles.caseImage}
              />
              <figcaption className={styles.imageCaption}>
                Human story and identification through the student spotlight.
              </figcaption>
            </figure>
            <figure className={styles.imageCard}>
              <Image
                src="/bridges-to-science/section-credibility.png"
                alt="Credibility signals with featured alumni and media coverage"
                width={1600}
                height={900}
                className={styles.caseImage}
              />
              <figcaption className={styles.imageCaption}>
                Credibility signals and trust building through collaborators and
                media.
              </figcaption>
            </figure>
            <figure className={styles.imageCard}>
              <Image
                src="/bridges-to-science/section-impact-metrics.png"
                alt="Impact metrics section with quantified outcomes"
                width={1600}
                height={900}
                className={styles.caseImage}
              />
              <figcaption className={styles.imageCaption}>
                Impact metrics as scannable evidence of scale.
              </figcaption>
            </figure>
            <figure className={styles.imageCard}>
              <Image
                src="/bridges-to-science/section-donation-form.png"
                alt="Embedded donation form with impact-based amount tiers"
                width={1600}
                height={900}
                className={styles.caseImage}
              />
              <figcaption className={styles.imageCaption}>
                Embedded donation form with anchored impact tiers.
              </figcaption>
            </figure>
          </div>
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

        <section className={styles.section}>
          <Link
            href="https://www.figma.com/design/NrlFpR5oojxrS2BdK46Vq9/Bridges-To-Science?node-id=25-96&t=GvOCtS8lIhHQ8af2-1"
            target="_blank"
            rel="noreferrer"
            className={styles.figmaButton}
          >
            View Figma File →
          </Link>
        </section>
      </div>
    </div>
  );
}
