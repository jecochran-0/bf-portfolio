import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export default function HenrysForkWildlifeAlliancePage() {
  return (
    <div data-shell-content className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.category}>UX Case Study</p>
          <h1 className={styles.title}>
            Redesigning a Wildlife Nonprofit&apos;s Entire Web Presence
          </h1>
          <p className={styles.subtitle}>
            Henry&apos;s Fork Wildlife Alliance - a grassroots conservation nonprofit
            in Island Park, Idaho.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <Link
                href="https://henrysforkwildlifealliance.org"
                target="_blank"
                rel="noreferrer"
                className={styles.liveSiteButton}
              >
                View Live Site →
              </Link>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Client</span>
              <span className={styles.metaValue}>
                Henry&apos;s Fork Wildlife Alliance (501(c)(3))
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>
                Solo Designer &amp; Developer (Volunteer)
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>Jan-Mar 2026</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Tools</span>
              <span className={styles.metaValue}>Figma + WordPress</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Platform</span>
              <span className={styles.metaValue}>
                Responsive web (custom WordPress theme)
              </span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <div className={styles.imageCard}>
            <Image
              src="/henrys-fork/henrys-fork-thumbnail.png"
              alt="Henry's Fork Wildlife Alliance homepage hero redesign"
              width={1600}
              height={1000}
              className={styles.caseImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.bodyText}>
            Henry&apos;s Fork Wildlife Alliance is a small, all-volunteer nonprofit
            focused on wildlife conservation in rural Idaho: habitat protection, a
            bear conflict response program, and community education. Their website
            had existed for years but had grown into a fragmented experience. The
            four-person team (board president, two wildlife biologists, and a
            communications coordinator) knew the site wasn&apos;t working but needed
            help defining a path forward.
          </p>
          <p className={styles.bodyText}>
            During the redesign, they were also launching a brand-new community
            bear sighting and conflict reporting tool. This would be HFWA&apos;s
            first interactive digital product and needed to launch with the new
            site.
          </p>
          <p className={styles.bodyText}>
            I handled the project end-to-end as a volunteer: research, information
            architecture, design system, interaction design, and development.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Identifying the Problems</h2>
          <p className={styles.bodyText}>
            Before designing anything, I interviewed all four stakeholders and ran
            a full content audit of the existing website. I mapped where content
            lived against where visitors would actually expect to find it.
          </p>

          <div className={styles.problemGrid}>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>The homepage was a junk drawer</h3>
              <p className={styles.cardText}>
                Alerts, testimonials, events, video embeds, news cards, donation
                CTAs, and program links were stacked with no hierarchy. The team
                described it as having too many competing banners and no clear main
                message. The page attempted to serve every audience and purpose at
                once, creating no focal point, no narrative, and no obvious next
                action.
              </p>
            </article>

            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                Time-sensitive content had no system
              </h3>
              <p className={styles.cardText}>
                HFWA regularly publishes urgent updates (public comment deadlines,
                zoning meetings, bear warnings), but the only mechanism was manual
                homepage content dumps. This is an infrastructure issue: without a
                designated urgency pattern, the homepage accumulates one-off alerts
                and collapses over time.
              </p>
            </article>

            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                IA served the org chart, not the visitor
              </h3>
              <p className={styles.cardText}>
                &quot;About Us&quot; and &quot;Our Work&quot; overlapped heavily,
                mission language was duplicated, updates were split across separate
                news/blog taxonomies, and events/volunteer opportunities were buried
                in sidebars. The donate action was implemented as a dropdown menu,
                adding decision friction at the core conversion point.
              </p>
            </article>

            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                A new program needed interaction design from scratch
              </h3>
              <p className={styles.cardText}>
                The bear sighting/conflict reporting program was not a simple
                contact form. Data quality directly impacts response speed and can
                influence whether lethal removal is avoided. The tool needed to work
                for stressed users on phones in rural areas, often without formal
                addresses.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Information Architecture: One Job Per Page
          </h2>
          <p className={styles.bodyText}>
            The most consequential decision was structural, not visual. The
            redesign applied a strict rule: each page has exactly one job. If
            content didn&apos;t support that job, it moved.
          </p>
          <h3 className={styles.subsectionTitle}>Restructured sitemap</h3>
          <ul className={styles.sequenceList}>
            <li>
              <strong>Homepage - Orient:</strong> Introduce HFWA, surface one
              community notice, show latest updates, and provide clear next actions.
            </li>
            <li>
              <strong>About - Explain who:</strong> Mission, history, team, voices,
              partners, and JEDI policy.
            </li>
            <li>
              <strong>Our Work - Explain what:</strong> Active campaigns, Island
              Park Bears program, past recaps, and project suggestion pathway.
            </li>
            <li>
              <strong>News - Inform:</strong> Merge blog/all-news split into one
              feed with category filtering.
            </li>
            <li>
              <strong>Get Involved - Activate:</strong> Events, volunteering,
              newsletter, and employment in one place.
            </li>
            <li>
              <strong>Report a Sighting - Collect:</strong> New interactive
              reporting workflow.
            </li>
          </ul>
          <p className={styles.bodyText}>
            The critical split was clarifying &quot;About&quot; versus &quot;Our
            Work.&quot; About became organization identity (who/why), and Our Work
            became organizational output (what/how/results). Once this distinction
            was explicit, content sorted naturally and navigation ambiguity dropped.
          </p>
          <p className={styles.bodyText}>
            I also replaced the old donate dropdown with a direct action button to
            remove choice friction at the highest-value conversion moment.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Designing the Community Notice System
          </h2>
          <p className={styles.bodyText}>
            The homepage clutter issue required a system, not visual cleanup. I
            designed a conditional alert card in the hero region:
          </p>
          <ul className={styles.bulletList}>
            <li>
              When urgent information exists, a gold-bordered notice card appears
              prominently.
            </li>
            <li>
              When no urgent notice exists, the card does not render, keeping the
              hero clean.
            </li>
          </ul>
          <p className={styles.bodyText}>
            This avoids the common failures of permanent empty alert zones (banner
            blindness), intrusive modals, or crowded top bars. In CMS terms, this
            is implemented as a simple visibility toggle plus message field, but the
            UX value is consistency and long-term sustainability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Interaction Design: Report a Sighting Form
          </h2>
          <h3 className={styles.subsectionTitle}>Context of use</h3>
          <p className={styles.bodyText}>
            Typical users are community members who may be on a rural road/trail,
            on mobile, uncertain about species, and potentially stressed after a
            close encounter or property damage event.
          </p>
          <h3 className={styles.subsectionTitle}>
            Location input: map-first, not address-first
          </h3>
          <p className={styles.bodyText}>
            Because sightings happen in places without formal addresses, the form
            uses tap-to-drop pin mapping first, then reverse geocoding to populate
            address fields. This reduces typing burden and improves data quality for
            HFWA response teams. The map defaults to Island Park to minimize zooming
            and interaction cost.
          </p>
          <h3 className={styles.subsectionTitle}>
            Conditional logic: show only what&apos;s relevant
          </h3>
          <p className={styles.bodyText}>
            Attractant type is collected from a targeted list (trash, bird feeder,
            BBQ, pet food, chicken coop, bee hive, vehicle, fridge/freezer, ice
            chest, other). If &quot;Trash&quot; is selected, the follow-up
            &quot;Was it in a bear-resistant trash can?&quot; appears. Progressive
            disclosure captures critical operational detail while keeping default
            form complexity low.
          </p>
          <h3 className={styles.subsectionTitle}>
            Species identification: designing for uncertainty
          </h3>
          <p className={styles.bodyText}>
            Species (grizzly, black, unsure) is optional and links to an external
            identification guide. Making species mandatory would incentivize bad
            guesses or abandonment. Honest uncertainty is more actionable than
            confident incorrect data.
          </p>
          <h3 className={styles.subsectionTitle}>
            Form structure: two clear sections
          </h3>
          <p className={styles.bodyText}>
            Fields are split into &quot;Your Information&quot; and &quot;Sighting
            Details&quot; to reduce context switching, set clear expectations, and
            improve completion confidence.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Content Strategy: Navigating Local Politics
          </h2>
          <p className={styles.bodyText}>
            During project discovery, I learned that the phrase &quot;wildlife
            crossings&quot; carried political baggage in Island Park, despite broad
            support for reducing wildlife-vehicle collisions. The solution was
            reframing language toward outcomes (&quot;protecting wildlife and
            landscapes&quot; and &quot;reducing wildlife-vehicle collisions&quot;)
            rather than contested policy terminology.
          </p>
          <p className={styles.bodyText}>
            This was not dilution; it was audience alignment. The goal was to keep
            conservation intent intact while reducing unnecessary message rejection.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CMS Architecture as UX</h2>
          <p className={styles.bodyText}>
            A core design objective was reducing developer dependence for routine
            content operations in a volunteer-run organization with limited tech
            budget. Backend authoring was treated as UX for internal users.
          </p>
          <ul className={styles.sequenceList}>
            <li>Hero media, headlines, and CTAs editable per page.</li>
            <li>Community notice message + visibility toggle in dashboard.</li>
            <li>Events managed through simple add/edit/remove workflows.</li>
            <li>Featured projects structured as reusable field groups.</li>
            <li>Team bios/photos editable without page restructuring.</li>
            <li>Testimonials handled through repeater fields.</li>
            <li>Partner logos uploadable/reorderable without CSS edits.</li>
          </ul>
          <p className={styles.bodyText}>
            Principle: if the CMS is hard to use, frontend quality decays over
            time. Sustainable nonprofit UX requires maintainable backend patterns.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Visual Design</h2>
          <p className={styles.bodyText}>
            The design system was built around Island Park&apos;s landscape:
            natural, warm, and approachable without leaning on outdoor cliches.
          </p>
          <h3 className={styles.subsectionTitle}>Typography</h3>
          <ul className={styles.bulletList}>
            <li>
              <strong>Bodoni Moda (italic):</strong> editorial section headings
              with a nature-journal tone.
            </li>
            <li>
              <strong>Inter:</strong> high-readability body content.
            </li>
            <li>
              <strong>Montserrat:</strong> sturdy utility treatment for nav, labels,
              and form UI.
            </li>
          </ul>
          <h3 className={styles.subsectionTitle}>Color palette</h3>
          <ul className={styles.bulletList}>
            <li>
              <strong>Gold #F7CA72:</strong> CTA and urgency accent color.
            </li>
            <li>
              <strong>Sage #9DB191:</strong> supporting natural accent.
            </li>
            <li>
              <strong>Dark Green #36492C:</strong> depth and authority.
            </li>
            <li>
              <strong>Cream #FEFCEF:</strong> soft, warm neutral background.
            </li>
          </ul>
          <h3 className={styles.subsectionTitle}>Visual elements</h3>
          <ul className={styles.bulletList}>
            <li>Full-bleed local wildlife photography with permissions/credits.</li>
            <li>Subtle topographic line textures as landscape cues.</li>
            <li>Rounded cards and generous spacing to reduce institutional tone.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stakeholder Feedback</h2>
          <blockquote className={styles.quoteBlock}>
            &quot;The site looks great and so much more professional.&quot;
            <span className={styles.quoteSource}>- HFWA Team</span>
          </blockquote>
          <blockquote className={styles.quoteBlock}>
            &quot;You are amazing, we can not thank you enough for all of your
            help.&quot;
            <span className={styles.quoteSource}>- HFWA Team</span>
          </blockquote>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I&apos;d Do Differently</h2>
          <ul className={styles.sequenceList}>
            <li>
              <strong>Add formal user testing:</strong> Stakeholder insight was
              strong, but field-context usability sessions would better validate the
              highest-stakes interaction (mobile sighting reports).
            </li>
            <li>
              <strong>Adopt mobile-first workflow:</strong> Desktop-first design led
              to late responsive discoveries for a mobile-heavy usage context.
            </li>
            <li>
              <strong>Use tighter review cadence:</strong> More structured
              wireframe/IA check-ins could have reduced late-stage revision cycles.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Took Away</h2>
          <p className={styles.bodyText}>
            Real-client design, even in volunteer contexts, requires balancing
            stakeholder alignment, scope, operational constraints, and local
            sensitivities. This project reinforced three core principles:
          </p>
          <ul className={styles.bulletList}>
            <li>CMS architecture is UX work.</li>
            <li>
              The best design for a small team is what they can maintain
              independently.
            </li>
            <li>
              Sometimes the highest-impact design decision is language, not layout.
            </li>
          </ul>
          <p className={styles.noteText}>
            Volunteer project for Henry&apos;s Fork Wildlife Alliance, a 501(c)(3)
            in Island Park, Idaho. Site partially live as of March 2026.
          </p>
        </section>
      </div>
    </div>
  );
}
