import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

const MYCHART_FIGMA =
  "https://www.figma.com/design/2tWc2rArTe9jZ19cN7imIG/MyChart-Case-Study?node-id=0-1&t=ReuFqsai4KqLiKXg-1";

const researchRows = [
  {
    num: 1,
    problem: "The list page creates anxiety before patients click in",
    evidence:
      '"Abnormal" badge with no context, clinical jargon, no doctor\'s note preview',
  },
  {
    num: 2,
    problem: "Results are individual items, not grouped experiences",
    evidence: "24 tests = 24 separate pages, no visit-level summary",
  },
  {
    num: 3,
    problem: "No distinction between reviewed and unreviewed results",
    evidence: "Patients can't tell if a doctor has seen their results",
  },
  {
    num: 4,
    problem: "Patients don't understand what the numbers mean",
    evidence: "Raw clinical data designed for providers, not patients",
  },
  {
    num: 5,
    problem: "No clear next step after viewing results",
    evidence: "No timeline, no guidance on urgency",
  },
] as const;

export default function MyChartResultsPage() {
  return (
    <div data-shell-content className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.category}>UX Case Study</p>
          <h1 className={styles.title}>
            Reducing Patient Anxiety in MyChart&apos;s Test Results Experience
          </h1>
          <p className={styles.kickerLine}>
            UX Designer (unsolicited case study) · Figma, secondary research · April 2026
          </p>
          <p className={styles.subtitle}>
            How I reduced patient anxiety and improved comprehension for 150 million users.
          </p>
          <p className={styles.disclaimer}>
            Independent concept study — not affiliated with Epic Systems or MyChart.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <Link
                href={MYCHART_FIGMA}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.figmaButton}
              >
                View Figma File →
              </Link>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Context</span>
              <span className={styles.metaValue}>Unsolicited case study (concept)</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>April 2026</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>UX Designer</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Tools</span>
              <span className={styles.metaValue}>Figma, secondary research</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Platform</span>
              <span className={styles.metaValue}>Epic MyChart (desktop + mobile)</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The problem</h2>
          <p className={styles.bodyText}>
            In 2021, the 21st Century Cures Act began requiring health providers to release test
            results to patients immediately, often before a doctor has reviewed them. MyChart became
            the delivery mechanism for raw clinical data that was never designed for patients.
          </p>
          <p className={styles.bodyText}>
            The result: patients open &quot;COMPREHENSIVE METABOLIC PANEL — Abnormal&quot; at 11pm
            on a Friday with no explanation, no doctor&apos;s note, and no indication anyone is
            looking at it. They Google. They panic. They leave the portal entirely. One research
            participant called it &quot;a folder of anxiety.&quot;
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research</h2>
          <p className={styles.bodyText}>
            I collected user feedback from 5 platforms and synthesized 7 peer-reviewed studies.
            Five core problems emerged:
          </p>
          <div className={styles.subsection}>
            <table className={styles.researchTable}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Problem</th>
                  <th scope="col">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {researchRows.map((row) => (
                  <tr key={row.num}>
                    <td className={styles.numCell}>{row.num}</td>
                    <td>{row.problem}</td>
                    <td>{row.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.bodyText}>
            I also mapped MyChart against Kaiser, NHS, One Medical, and b.well. MyChart&apos;s range
            bars are best-in-class, but it&apos;s missing visit-level grouping, provider review
            status, and AI-generated summaries that competitors have only partially implemented.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Design principles</h2>
          <ul className={styles.principleList}>
            <li>
              <strong>Reassurance before data.</strong> Lead with what the doctor said, not what
              the lab measured.
            </li>
            <li>
              <strong>Group by experience, not by record.</strong> Patients think in visits, not
              individual test IDs.
            </li>
            <li>
              <strong>Distinguish reviewed from raw.</strong> &quot;My doctor saw this&quot; vs.
              &quot;I&apos;m alone with data I don&apos;t understand&quot; is the core anxiety gap.
            </li>
            <li>
              <strong>Meet patients where anxiety starts.</strong> AI help belongs on the results
              page, not buried in a separate chatbot.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Solutions</h2>
          <h3 className={styles.setTitle}>Set A: Information architecture (no AI required)</h3>

          <div className={styles.subsection}>
            <h4 className={styles.solutionLabel}>A1. Visit-level grouping</h4>
            <p className={styles.bodyText}>
              Instead of 24 individual line items, results are grouped into collapsible visit cards.
              The card header shows date, result count, flag count, and provider review status, and
              surfaces a preview of the doctor&apos;s note before the patient expands it. This
              directly addresses the finding that patients&apos; worst anxiety comes from not
              knowing whether anyone has looked at their results yet.
            </p>
            <p className={styles.bodyText}>
              <strong>Tradeoff:</strong> Grouping by visit means a patient tracking cholesterol over
              6 months opens 6 cards instead of seeing a single trend line. That&apos;s a real
              cost, which is why I included a &quot;view by test type&quot; toggle as a secondary
              view. The anxiety problem is more urgent than the tracking problem, so visit-level
              grouping is the right default.
            </p>
          </div>

          <div
            className={`${styles.compareGrid} ${styles.compareGridDesktop}`}
            aria-label="Test results list: desktop before and after"
          >
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>Before (desktop)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-results-list-before.png"
                  alt="MyChart test results: flat list of individual tests"
                  width={1200}
                  height={800}
                  className={styles.caseImage}
                />
              </figure>
            </div>
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>After (desktop)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-results-list-solution.png"
                  alt="Proposed: visit cards with grouped visits"
                  width={1200}
                  height={800}
                  className={styles.caseImage}
                />
              </figure>
            </div>
          </div>

          <div
            className={`${styles.compareGrid} ${styles.compareGridMobile}`}
            aria-label="Test results list: mobile before and after"
          >
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>Before (mobile)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-list-mobile-before.png"
                  alt="MyChart mobile: flat list of lab results"
                  width={800}
                  height={1200}
                  className={styles.caseImage}
                  sizes="(max-width: 900px) min(90vw, 400px), 400px"
                />
              </figure>
            </div>
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>After (mobile)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-list-mobile-solution.png"
                  alt="Proposed mobile: visit cards"
                  width={800}
                  height={1200}
                  className={styles.caseImage}
                  sizes="(max-width: 900px) min(90vw, 400px), 400px"
                />
              </figure>
            </div>
          </div>

          <div className={styles.subsection}>
            <h4 className={styles.solutionLabel}>A2. Context-aware status badges</h4>
            <p className={styles.bodyText}>
              The binary &quot;Abnormal&quot; badge is replaced with three states that communicate
              what actually matters to a patient: &quot;Reviewed — see provider&apos;s note&quot; /
              &quot;Provider has a follow-up plan&quot; / &quot;Pending provider review.&quot;
            </p>
            <p className={styles.bodyText}>
              The third state is the most important addition. It currently doesn&apos;t exist in
              MyChart, which means patients have no way to distinguish &quot;my doctor saw this and
              isn&apos;t concerned&quot; from &quot;my doctor hasn&apos;t looked at this yet.&quot;
              That gap drives a large volume of unnecessary inbox messages to providers.
            </p>
            <p className={styles.bodyText}>
              I considered the NHS traffic-light approach but their own redesign history showed
              color-only systems fail for colorblind users and older adults. These badges are
              text-first, with color as a secondary signal. Critically, they communicate provider
              status, not just clinical status. A flagged result can still carry a reassuring badge
              if the doctor has reviewed it.
            </p>
          </div>

          <div className={styles.subsection}>
            <h4 className={styles.solutionLabel}>A3. Flag results for next appointment</h4>
            <p className={styles.bodyText}>
              No competitor currently offers this. I kept flags patient-side only in v1 to avoid
              adding to provider inbox volume, with sharing as a natural follow-on feature if
              testing shows patients want it.
            </p>
          </div>

          <h3 className={styles.setTitle}>Set B: AI-powered interpretation layer</h3>
          <p className={styles.bodyText}>
            Epic already has Emmie (patient-facing AI chatbot), AI imaging summaries, and Art
            (clinician AI used 16M+ times per month). This solution extends those existing
            capabilities into lab results, where the research shows the highest patient anxiety and
            the most patients leaving the portal for third-party AI tools.
          </p>

          <div className={styles.subsection}>
            <h4 className={styles.solutionLabel}>B1. AI-generated visit-level summary</h4>
            <p className={styles.bodyText}>
              A plain-language summary appears at the top of each visit card: &quot;Your Dec 30
              blood panel came back mostly normal. Two liver markers were slightly above the typical
              range. Your provider left a note explaining this is common and can fluctuate with
              diet. He ordered a follow-up in 1-2 weeks.&quot;
            </p>
            <p className={styles.bodyText}>
              When no provider note exists yet, the summary is strictly factual. No interpretation,
              no reassurance, nothing that could pass for clinical judgment. False reassurance is the
              highest-risk failure mode in healthcare AI, so the guardrail is clear: the AI bridges
              the clinical data and the provider&apos;s note, it never replaces either.
            </p>
          </div>

          <div
            className={`${styles.compareGrid} ${styles.compareGridDesktop}`}
            aria-label="Single visit: desktop before and after"
          >
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>Before (desktop)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-result-before.png"
                  alt="Current MyChart visit-level result"
                  width={1200}
                  height={900}
                  className={styles.caseImage}
                />
              </figure>
            </div>
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>After (desktop)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-result-solution.png"
                  alt="Proposed: visit summary and hierarchy"
                  width={1200}
                  height={900}
                  className={styles.caseImage}
                />
              </figure>
            </div>
          </div>

          <div
            className={`${styles.compareGrid} ${styles.compareGridMobile}`}
            aria-label="Single visit: mobile before and after"
          >
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>Before (mobile)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-result-before-mobile.png"
                  alt="Current MyChart result on mobile"
                  width={800}
                  height={1200}
                  className={styles.caseImage}
                  sizes="(max-width: 900px) min(90vw, 400px), 400px"
                />
              </figure>
            </div>
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>After (mobile)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-result-before-solution.png"
                  alt="Proposed mobile: summary-first layout"
                  width={800}
                  height={1200}
                  className={styles.caseImage}
                  sizes="(max-width: 900px) min(90vw, 400px), 400px"
                />
              </figure>
            </div>
          </div>

          <div className={styles.subsection}>
            <h4 className={styles.solutionLabel}>B2. Contextual &quot;What this means&quot; per result</h4>
            <p className={styles.bodyText}>
              The current &quot;Learn more about COMPREHENSIVE METABOLIC PANEL&quot; link sends
              patients to a generic education page. That&apos;s the digital version of spending two
              hours with a medical dictionary. This replaces it with a result-specific explanation
              tied to the patient&apos;s actual value, pointing back to the provider&apos;s note. The
              question patients have is &quot;what does my number mean,&quot; not &quot;what is this
              test.&quot;
            </p>
          </div>

          <div
            className={`${styles.compareGrid} ${styles.compareGridDesktop}`}
            aria-label="Lab metrics: desktop before and after"
          >
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>Before (desktop)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-metrics-before.png"
                  alt="MyChart lab metrics with generic learn more"
                  width={1200}
                  height={900}
                  className={styles.caseImage}
                />
              </figure>
            </div>
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>After (desktop)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-metrics-after.png"
                  alt="Proposed: contextual explanation for the value"
                  width={1200}
                  height={900}
                  className={styles.caseImage}
                />
              </figure>
            </div>
          </div>

          <div
            className={`${styles.compareGrid} ${styles.compareGridMobile}`}
            aria-label="Lab metrics: mobile before and after"
          >
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>Before (mobile)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-metrics-mobile-before.png"
                  alt="MyChart lab metrics on mobile"
                  width={800}
                  height={1200}
                  className={styles.caseImage}
                  sizes="(max-width: 900px) min(90vw, 400px), 400px"
                />
              </figure>
            </div>
            <div className={styles.compareCell}>
              <p className={styles.compareLabel}>After (mobile)</p>
              <figure className={`${styles.imageCard} ${styles.figure}`}>
                <Image
                  src="/mychart-results/test-metrics-mobile-solution.png"
                  alt="Proposed mobile: contextual help"
                  width={800}
                  height={1200}
                  className={styles.caseImage}
                  sizes="(max-width: 900px) min(90vw, 400px), 400px"
                />
              </figure>
            </div>
          </div>

          <div className={styles.subsection}>
            <h4 className={styles.solutionLabel}>B3. Inline Emmie prompt</h4>
            <p className={styles.bodyText}>
              Emmie is surfaced directly on the results page as a safety net, after the patient has
              read the summary and provider note. The interface answers the most common questions
              first through the summary and contextual notes. Emmie handles what&apos;s left.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key decisions</h2>
          <p className={styles.bodyText}>
            The most consequential decision was replacing the &quot;Abnormal&quot; badge. I
            couldn&apos;t remove it entirely since patients need to know when something is flagged.
            The core insight was that the badge needs to communicate provider status, not just
            clinical status. MyChart currently has no way to show that distinction at all.
          </p>
          <p className={styles.bodyText}>
            The hardest constraint was the AI layer. Summaries in a healthcare context carry real
            liability. The design keeps the AI in a supporting role: it contextualizes, points to the
            provider, and stays strictly factual when no note exists yet.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I&apos;d measure</h2>
          <ul className={styles.measureList}>
            <li>
              Provider inbox volume for result-related messages (target: fewer &quot;what does this
              mean?&quot; messages; result-action messages should hold steady or increase)
            </li>
            <li>Time-to-comprehension, measured in usability testing against the current design</li>
            <li>
              Patient-initiated messages within 24 hours of result release (target: flatter spike,
              more specific questions)
            </li>
            <li>Portal avoidance via notification-to-login rate</li>
            <li>
              Patient confidence via an optional one-question pulse survey after viewing results
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I&apos;d test first</h2>
          <p className={styles.bodyText}>
            <strong>Round 1: The &quot;Abnormal&quot; badge.</strong> Three variations against the
            current control: Clinical + Context / Status-Led / Action-Oriented. Between-subjects,
            15-20 participants across age groups and health literacy levels. Looking for the
            version that lowers anxiety without reducing comprehension.
          </p>
          <p className={styles.bodyText}>
            <strong>Round 2: Visit-level grouping vs. flat list.</strong> Task-based: &quot;Find the
            two flagged results and tell me what your doctor said.&quot; The signal I&apos;m
            looking for is whether participants naturally summarize the big picture without being
            prompted. If they do, the grouping is working.
          </p>
          <p className={styles.bodyText}>
            <strong>Round 3: AI summary tone.</strong> Factual/Neutral vs. Reassuring/Contextual
            vs. Action-Oriented. Looking for the version that lowers anxiety without causing
            patients to skip the provider&apos;s note entirely.
          </p>
          <p className={styles.bodyText}>
            Full research documentation, competitive analysis, and wireframe specifications
            available on request.
          </p>
        </section>

        <section className={styles.section} aria-label="Full case study PDF">
          <h2 className={styles.sectionTitle}>Full case study (PDF)</h2>
          <div className={styles.pdfSection}>
            <p className={styles.bodyText}>
              This page is the condensed case study. For a printable deep dive, use the full PDF.
            </p>
            <Link
              href="/mychart-results/mychart-case-study-full.pdf"
              className={styles.pdfCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the full case study
            </Link>
            <p className={styles.pdfHint}>Opens a PDF in a new tab.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
