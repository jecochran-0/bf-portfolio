import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export default function HenrysForkWildlifeAlliancePage() {
  return (
    <div data-shell-content className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.category}>UX Design &amp; Development</p>
          <h1 className={styles.title}>
            Redesigning a Wildlife Nonprofit&apos;s Entire Web Presence
          </h1>
          <p className={styles.subtitle}>
            Henry&apos;s Fork Wildlife Alliance, a grassroots conservation nonprofit
            in Island Park, Idaho
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
                Solo designer &amp; developer · Volunteer
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>Jan to Mar 2026</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Tools</span>
              <span className={styles.metaValue}>
                Figma → WordPress (custom theme from scratch)
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Platform</span>
              <span className={styles.metaValue}>
                Responsive web (desktop + mobile)
              </span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.bodyText}>
            Henry&apos;s Fork Wildlife Alliance is a small, all-volunteer nonprofit
            that works on wildlife conservation in rural Idaho: habitat protection,
            a bear conflict response program, and community education. Their
            website had been around for a few years but had grown into a mess. The
            team of four (board president, two wildlife biologists, communications
            coordinator) came to me with a site they knew wasn&apos;t working but
            didn&apos;t know how to fix.
          </p>
          <p className={styles.bodyText}>
            On top of the redesign, they were launching a brand-new program: a
            community bear sighting and conflict reporting tool. This would be
            HFWA&apos;s first interactive digital product, and it needed to ship as
            part of the new site.
          </p>
          <p className={styles.bodyText}>
            I volunteered to handle the entire thing solo: research, content
            architecture, design system, interaction design, and development.
          </p>

          <figure className={`${styles.imageCard} ${styles.figure}`}>
            <Image
              src="/henrys-fork/homepage-before.png"
              alt="Original HFWA homepage with dropdown donate menu and cluttered hero"
              width={1600}
              height={1000}
              className={styles.caseImage}
            />
            <figcaption className={styles.imageCaption}>
              The old homepage: dropdown donate menu, seven nav items with
              dropdowns, a massive logo circle competing with the hero image, and
              content stacked with no hierarchy.
            </figcaption>
          </figure>

          <figure className={`${styles.imageCard} ${styles.figure}`}>
            <Image
              src="/henrys-fork/homepage-after.png"
              alt="Redesigned HFWA homepage with transparent nav and clear hero"
              width={1600}
              height={1000}
              className={styles.caseImage}
            />
            <figcaption className={styles.imageCaption}>
              The new homepage: transparent nav with five clear items, a direct
              donate button, full-bleed hero with a single clear message, and an
              immediate intro section below.
            </figcaption>
          </figure>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Identifying the Problems</h2>
          <p className={styles.bodyText}>
            Before designing anything, I talked to all four stakeholders and did a
            full content audit of every page on the existing site. I wasn&apos;t
            just cataloging what existed. I was mapping where content lived versus
            where a visitor would actually expect to find it.
          </p>

          <div className={styles.problemGrid}>
            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>The homepage was a junk drawer</h3>
              <p className={styles.cardText}>
                The homepage had alerts, testimonials, event listings, video
                embeds, news cards, donation CTAs, and program links, all stacked
                on top of each other with no clear hierarchy. The team told me
                directly: &quot;Too many competing banners at top of page&quot; and
                &quot;visitors have to look around to find out our main message.&quot;
              </p>
              <p className={styles.cardText}>
                The core problem was that the homepage was trying to serve every
                audience and every purpose at once. First-time visitors looking for
                basic orientation were competing for attention with returning
                community members looking for an event date. When everything is
                emphasized, nothing is. The page had no focal point, no narrative,
                and no clear next action.
              </p>
              <figure
                className={`${styles.imageCard} ${styles.figure} ${styles.problemCardFigure}`}
              >
                <Image
                  src="/henrys-fork/homepage-before-below-fold.png"
                  alt="Original HFWA homepage below the fold showing cluttered videos and sidebar"
                  width={1600}
                  height={1000}
                  className={styles.caseImage}
                />
                <figcaption className={styles.imageCaption}>
                  Below the fold: two video embeds side by side, a &quot;Get
                  Involved&quot; sidebar stuffed with links, a bear ordinance
                  callout with a photo, and more content below. This is what the
                  team meant by &quot;dumping information onto the homepage.&quot;
                </figcaption>
              </figure>
            </article>

            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                Time-sensitive content had no system
              </h3>
              <p className={styles.cardText}>
                HFWA regularly needs to push out urgent information: public
                comment deadlines, zoning meeting dates, bear activity warnings.
                Their only option was to manually add content blocks to the
                homepage. In their words: &quot;Historically we have dumped this
                information onto our homepage which gets quite messy.&quot;
              </p>
              <p className={styles.cardText}>
                This is a common pattern with small org websites: the homepage
                becomes the default location for anything important because
                there&apos;s no infrastructure for urgency. Each new alert pushes
                previous content down, the page grows longer, and the original
                structure breaks. It&apos;s not a content problem. It&apos;s an
                {' '}infrastructure problem.
              </p>
            </article>

            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                Information architecture served the org chart, not the visitor
              </h3>
              <p className={styles.cardText}>
                The existing navigation reflected how HFWA thought about itself
                internally. &quot;About Us&quot; and &quot;Our Work&quot; had
                overlapping content, and mission language appeared on both pages,
                project recaps mixed with organizational history. Blog posts and
                community news were split across separate pages with different
                taxonomies. Events and volunteer opportunities were buried in a
                sidebar widget.
              </p>
              <p className={styles.cardText}>
                The donate button was a dropdown menu with multiple options, adding
                decision friction to the single most important conversion action on
                the site. When someone is ready to give money, the interface should
                make that as frictionless as possible instead of asking them to choose
                between three donation types first.
              </p>
            </article>

            <article className={styles.problemCard}>
              <h3 className={styles.cardTitle}>
                A new program needed interaction design from scratch
              </h3>
              <p className={styles.cardText}>
                The team was launching a bear sighting and conflict reporting
                program: deploying electric fencing and &quot;unwelcome mats&quot;
                to properties with bear activity. They needed community members to
                report encounters quickly so the team could respond before
                situations escalated to lethal removal of a bear.
              </p>
              <p className={styles.cardText}>
                This wasn&apos;t a contact form. The quality of the data collected
                would directly affect whether HFWA could intervene in time. That
                meant the interaction design had to account for the actual context
                of use: someone on a phone, possibly on a rural trail with no
                formal address, who just saw a bear.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Information Architecture: One Job Per Page
          </h2>
          <p className={styles.bodyText}>
            The biggest decision on this project wasn&apos;t visual. It was
            structural. The old site scattered content across pages with overlapping
            purposes. I reorganized everything under a strict rule: every page gets
            exactly one job. If content doesn&apos;t serve that page&apos;s job, it
            moves somewhere else. This sounds simple, but it required pulling the
            entire site apart and reassembling it.
          </p>
          <h3 className={styles.subsectionTitle}>The restructured sitemap</h3>
          <ul className={styles.bulletList}>
            <li>
              <strong>Homepage → Orient.</strong> Introduces HFWA, surfaces one
              community notice, shows latest news, and offers clear CTAs. Its only
              job is to answer &quot;what is this organization and what should I do
              next?&quot;
            </li>
            <li>
              <strong>About → Explain who.</strong> Mission, history, team bios,
              community voices, partners, JEDI policy. Everything about the
              organization as an entity lives here.
            </li>
            <li>
              <strong>Our Work → Explain what.</strong> Active campaigns, the Island
              Park Bears program, past project recaps, and a &quot;suggest a
              project&quot; pathway. Everything about the work itself lives here.
            </li>
            <li>
              <strong>News → Inform.</strong> The old site split content between
              &quot;Blog&quot; and &quot;All News&quot; with different taxonomies,
              forcing visitors to check two places. I merged them into a single
              unified feed with category filtering. One place, all updates.
            </li>
            <li>
              <strong>Get Involved → Activate.</strong> Events, volunteering,
              newsletter signup, employment. Every action a community member might
              take is consolidated here. On the old site, these were scattered
              across sidebars and subpages.
            </li>
            <li>
              <strong>Report a Sighting → Collect.</strong> Brand new. A dedicated
              interactive tool for reporting bear encounters.
            </li>
          </ul>
          <p className={styles.bodyText}>
            The trickiest split was &quot;About&quot; vs. &quot;Our Work.&quot; On
            the old site, these pages overlapped so much that visitors couldn&apos;t
            tell which one had what they needed. The fix was a clean conceptual
            line: About is the organization (who we are, why we exist, who&apos;s
            involved), Our Work is the output (what we&apos;re doing, what
            we&apos;ve done, what we need help with). Once that distinction is
            explicit, content sorts itself naturally.
          </p>
          <p className={styles.bodyText}>
            I also replaced the donate dropdown with a single direct button. Fewer
            choices, faster conversion.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Designing the Community Notice System
          </h2>
          <p className={styles.bodyText}>
            The homepage content-dumping problem needed a systemic fix, not a
            cosmetic one. Telling the team &quot;don&apos;t put stuff on the
            homepage&quot; doesn&apos;t work if there&apos;s nowhere else for urgent
            content to go.
          </p>
          <h3 className={styles.subsectionTitle}>The solution: a conditional alert card</h3>
          <p className={styles.bodyText}>
            I designed a notice card that sits in the hero section of the homepage,
            alongside upcoming events:
          </p>
          <ul className={styles.bulletList}>
            <li>
              When there&apos;s an urgent alert (public comment deadline, bear
              activity warning, zoning meeting), the team types it into the
              WordPress dashboard and a gold-bordered notice card appears prominently
              in the hero.
            </li>
            <li>
              When there&apos;s nothing urgent, the card doesn&apos;t render at
              all. The hero stays clean.
            </li>
          </ul>
          <figure className={`${styles.imageCard} ${styles.figure}`}>
            <Image
              src="/henrys-fork/hero-community-notice.png"
              alt="HFWA hero with community notice card in the corner"
              width={1600}
              height={1000}
              className={styles.caseImage}
            />
            <figcaption className={styles.imageCaption}>
              The notice card in action: a gold-bordered alert card appears in the
              bottom-right of the hero when the team has something urgent to
              communicate. When there&apos;s nothing to announce, this card
              isn&apos;t there at all, and the hero stays clean.
            </figcaption>
          </figure>
          <p className={styles.bodyText}>
            This matters because the alternative approaches all have problems. A
            permanent alert section that&apos;s sometimes empty teaches visitors to
            ignore it. That&apos;s banner blindness. A modal or popup is
            interruptive and annoying, especially for returning visitors. An alert
            bar above the header competes with navigation.
          </p>
          <p className={styles.bodyText}>
            The conditional card approach means the alert is prominent when it
            exists and invisible when it doesn&apos;t. The hero section composition
            adjusts automatically. And the team gets a predictable, designated
            place for urgent content, which means they stop asking &quot;where do I
            put this?&quot; every time something comes up.
          </p>
          <p className={styles.bodyText}>
            The implementation is simple (a visibility toggle and a text field in
            the CMS), but the design decision behind it is about giving the
            organization a sustainable pattern for urgency instead of a recurring
            mess.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Interaction Design: The Report a Sighting Form
          </h2>
          <p className={styles.bodyText}>
            This was the most interesting design problem on the project. It&apos;s
            the only part of the site that&apos;s a real product, a tool people
            use in the field to submit data that drives operational decisions.
          </p>
          <h3 className={styles.subsectionTitle}>Context of use</h3>
          <p className={styles.bodyText}>
            The typical user is a community member in Island Park, Idaho who just
            encountered a bear. They might be:
          </p>
          <ul className={styles.bulletList}>
            <li>On their phone, possibly on a rural road or trail</li>
            <li>At a location with no formal street address</li>
            <li>Unsure what species of bear they saw</li>
            <li>
              Stressed, since they may have had property damage or a close encounter
            </li>
          </ul>
          <p className={styles.bodyText}>
            This context drives every decision about the form.
          </p>
          <h3 className={styles.subsectionTitle}>
            Location input: map-first, not address-first
          </h3>
          <p className={styles.bodyText}>
            The default pattern for location capture is an address field. That
            doesn&apos;t work here. Many sightings happen on forest roads, trails,
            campgrounds, and private land without clear addresses. Asking someone to
            type &quot;the road near Big Springs, I think it was called Mesa Falls
            Scenic Byway, maybe a mile past the turnoff&quot; is asking for bad data.
          </p>
          <p className={styles.bodyText}>
            I set up an interactive map where the user taps to drop a pin at the
            sighting location. The pin reverse-geocodes to auto-populate the
            address fields (street, city, state, zip). This serves two purposes:
            it&apos;s faster for the user (one tap vs. typing), and it produces more
            accurate location data for the HFWA team who need to know exactly where
            the bear was.
          </p>
          <figure className={`${styles.imageCard} ${styles.figure}`}>
            <Image
              src="/henrys-fork/report-sighting-map.png"
              alt="Report a Sighting form location section with map pin and address fields"
              width={1600}
              height={1000}
              className={styles.caseImage}
            />
            <figcaption className={styles.imageCaption}>
              The map interaction: the user taps to drop a pin, and the address
              fields below auto-populate via reverse geocoding. The map defaults to
              the Island Park area so users don&apos;t have to zoom in from a world
              view.
            </figcaption>
          </figure>
          <p className={styles.bodyText}>
            The map is centered on the Island Park area by default, so the user
            doesn&apos;t have to zoom in from a world view. Small detail, but it
            cuts unnecessary interaction for an audience that&apos;s almost always
            reporting from the same region.
          </p>
          <h3 className={styles.subsectionTitle}>
            Conditional logic: show only what&apos;s relevant
          </h3>
          <p className={styles.bodyText}>
            One of the key data points HFWA needs is whether a bear got into human
            attractants, and if so, what kind. The form presents a dropdown: trash,
            bird feeder, BBQ, pet food, chicken coop, bee hive, vehicle,
            fridge/freezer, ice chest, other.
          </p>
          <p className={styles.bodyText}>
            If the user selects &quot;Trash,&quot; a follow-up question appears:
            &quot;Was it in a bear-resistant trash can?&quot; This question is
            operationally critical for HFWA. It tells them whether to deploy a
            bear-resistant container, but it&apos;s irrelevant for any other
            attractant type.
          </p>
          <p className={styles.bodyText}>
            This is progressive disclosure: don&apos;t show a field until the
            user&apos;s previous answer makes it relevant. It keeps the form shorter
            for most people while capturing the specific detail the team actually
            needs. Showing every possible field upfront would
            make the form look longer and more intimidating than it actually is,
            which kills completion rates.
          </p>
          <h3 className={styles.subsectionTitle}>
            Species identification: designing for uncertainty
          </h3>
          <p className={styles.bodyText}>
            The form asks what species the bear was: grizzly, black bear, or
            unsure. Most people in the area genuinely cannot tell the difference.
            Making this a required field would produce one of two bad outcomes:
            people would guess (bad data), or people would abandon the form (no
            data).
          </p>
          <p className={styles.bodyText}>
            Instead, species is optional, and the field links to HFWA&apos;s bear
            identification guide. This treats the form as an educational touchpoint,
            so even if the user can&apos;t identify the species right now, they
            learn how to for next time. And for HFWA&apos;s purposes, an honest
            &quot;unsure&quot; is more useful than a confident wrong answer.
          </p>
          <h3 className={styles.subsectionTitle}>Form structure: two clear sections</h3>
          <p className={styles.bodyText}>
            The form is split into &quot;Your Information&quot; (name, phone, email)
            and &quot;Sighting Details&quot; (location, species, attractants,
            description, photos). This does two things: it sets expectations about
            length before the user starts. It&apos;s not a 20-field monster:
            it&apos;s two short sections, and it groups related fields logically so
            the user isn&apos;t jumping between personal info and incident details
            mid-form.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Content Strategy: Navigating Local Politics
          </h2>
          <p className={styles.bodyText}>
            Partway through the project, I learned that &quot;wildlife crossings&quot;
            (infrastructure that helps animals safely cross highways) is politically
            loaded in the Island Park community. Some residents see
            it as government overreach on land-use policy. HFWA advocates for these
            crossings as a conservation measure, but using that specific terminology
            on the site risked alienating a significant portion of the audience.
          </p>
          <p className={styles.bodyText}>
            Rather than using the contested term, the site frames the same work
            around outcomes: &quot;protecting wildlife and landscapes&quot; and
            &quot;reducing wildlife-vehicle collisions.&quot; Same conservation
            goals, but phrased in a way that doesn&apos;t immediately trigger
            political resistance.
          </p>
          <p className={styles.bodyText}>
            This isn&apos;t about hiding what HFWA does. It&apos;s about meeting
            the audience where they are. The site needs to work for the entire
            Island Park community, including people who support conservation but have
            complicated feelings about specific policy approaches. Sometimes the
            highest-impact design decision isn&apos;t a layout or a component;
            it&apos;s choosing the right word.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CMS Architecture as UX</h2>
          <p className={styles.bodyText}>
            This section doesn&apos;t have flashy visuals, but it might be the most
            important design work on the project.
          </p>
          <p className={styles.bodyText}>
            The old site required a developer for routine content updates. Someone
            on the HFWA team wanted to change a hero image? Call the developer. Add
            a new board member to the About page? Call the developer. Post a
            community notice about an upcoming zoning meeting? Call the developer.
            For a volunteer-run nonprofit with no tech budget, this meant content
            went stale, updates were slow, and the team was permanently dependent on
            outside help for basic changes.
          </p>
          <p className={styles.bodyText}>
            I designed the backend content architecture around a simple principle:
            the CMS is a user interface too, and the HFWA team are its users.
          </p>
          <p className={styles.bodyText}>
            That meant every content element on the site needed a corresponding field
            in the dashboard that a non-technical person could find, understand, and
            edit without instructions. Not &quot;edit the PHP template,&quot; not
            &quot;paste this shortcode,&quot; not &quot;change the image URL in the
            custom HTML block.&quot; Real labeled fields with clear purposes.
          </p>
          <figure className={`${styles.imageCard} ${styles.figure}`}>
            <Image
              src="/henrys-fork/cms-homepage-fields.png"
              alt="WordPress ACF homepage editor with notice toggle and tabbed sections"
              width={1600}
              height={1000}
              className={styles.caseImage}
            />
            <figcaption className={styles.imageCaption}>
              The homepage content editor: tabbed sections for each part of the page,
              a simple toggle to show or hide the community notice, and clearly
              labeled fields for the notice title and text. The &quot;Upcoming
              Events&quot; repeater lets the team add or remove events with one
              click. This is what the team actually interacts with, and it needs to
              be just as considered as the frontend.
            </figcaption>
          </figure>
          <p className={styles.bodyText}>
            Here&apos;s what that looks like in practice:
          </p>
          <ul className={styles.bulletList}>
            <li>
              <strong>Hero sections:</strong> Each page has its own editable hero
              fields (image, headline, subtext, CTA button text and URL). The team
              doesn&apos;t need to understand page templates to update what visitors
              see first.
            </li>
            <li>
              <strong>Community notice system:</strong> A text field and a
              visibility toggle. Type the message, flip the toggle to &quot;show,&quot;
              and it appears in the homepage hero. Flip it off and it&apos;s gone. No
              code, no layout rearranging.
            </li>
            <li>
              <strong>Upcoming events:</strong> A repeater field where each row is an
              event (title, date, link). Add a row for a new event, delete the row
              when it&apos;s passed. The homepage pulls the latest ones automatically.
            </li>
            <li>
              <strong>Featured projects:</strong> Each spotlight is a structured set of
              fields (heading, description, image, link). The team fills in the fields
              and the layout handles itself.
            </li>
            <li>
              <strong>Team bios and photos:</strong> Adding a new board member means
              filling in a name, role, photo, and bio. No page restructuring, no CSS
              changes, no figuring out where in HTML the new card goes.
            </li>
            <li>
              <strong>Testimonials:</strong> A repeater field where each row is a
              quote, an attribution, and optionally a photo. Add quotes, remove quotes,
              reorder them. The page adapts.
            </li>
            <li>
              <strong>Partner logos:</strong> Upload an image, it appears in the
              partners grid. Drag to reorder. Delete to remove.
            </li>
          </ul>
          <p className={styles.bodyText}>
            The reason this matters as UX work, not just as &quot;backend
            development,&quot; is that it directly determines the long-term quality
            of the frontend experience. A beautifully designed site that requires a
            developer for every content update is a site that looks great on launch
            day and slowly degrades after. The team stops updating because it&apos;s
            too hard. Content goes stale. The hero still says &quot;Summer 2025&quot;
            in November. The events section shows something from three months ago.
            The site becomes a snapshot of the day it launched rather than a living
            resource.
          </p>
          <p className={styles.bodyText}>
            By treating the dashboard as an interface that needs to be usable, not
            just functional, the design stays alive after I walk away. That&apos;s
            the whole point of working with a volunteer team: if they can&apos;t
            maintain it independently, the redesign has an expiration date.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Visual Design</h2>
          <figure className={`${styles.imageCard} ${styles.figure}`}>
            <Image
              src="/henrys-fork/style-guide.png"
              alt="HFWA style guide with Bodoni and Inter type scale and color palette"
              width={1600}
              height={1000}
              className={styles.caseImage}
            />
            <figcaption className={styles.imageCaption}>
              The type and color system: Bodoni 72 for display headings, Inter for
              body text, and a palette pulled from the landscape (gold, sage, dark
              green, cream, with a neutral dark gray for secondary text).
            </figcaption>
          </figure>
          <p className={styles.bodyText}>
            I built a design system grounded in the feel of Island Park: warm,
            natural, approachable. Not corporate-nonprofit, not outdoorsy-cliché.
          </p>
          <h3 className={styles.subsectionTitle}>Typography</h3>
          <ul className={styles.bulletList}>
            <li>
              <strong>Bodoni Moda (italic)</strong> for section headings. It gives the
              site a nature journal quality, editorial and organic without being
              decorative. It signals &quot;this is a place that cares about the
              land&quot; without resorting to leaf icons or wood textures.
            </li>
            <li>
              <strong>Inter</strong> for body text: clean, high readability, gets out
              of the way.
            </li>
            <li>
              <strong>Montserrat</strong> for labels and UI elements: sturdy and
              utilitarian, used for navigation, buttons, and form labels where
              clarity matters more than personality.
            </li>
          </ul>
          <h3 className={styles.subsectionTitle}>Color palette</h3>
          <ul className={styles.bulletList}>
            <li>
              <strong>Gold #F7CA72:</strong> warmth, optimism, primary accent and
              CTA color. It ended up doing a lot of heavy lifting across the site
              (notice card borders, button fills, hover states, decorative quote
              marks).
            </li>
            <li>
              <strong>Sage #9DB191:</strong> natural, grounded, secondary accent for
              supporting elements and subtle highlights.
            </li>
            <li>
              <strong>Dark Green #36492C:</strong> authority and depth for primary
              backgrounds and text. Evokes forest canopy without being literal
              about it.
            </li>
            <li>
              <strong>Cream #FEFCEF:</strong> the default page background. Softer
              than white, which felt too clinical for a conservation nonprofit.
            </li>
          </ul>
          <h3 className={styles.subsectionTitle}>Visual elements</h3>
          <ul className={styles.bulletList}>
            <li>
              Full-bleed wildlife photography from local photographers, with a
              permission and credit system built into the site
            </li>
            <li>
              Topographic line art as a subtle background texture, a nod to the
              landscape without competing with content
            </li>
            <li>
              Rounded cards and generous whitespace to keep the tone approachable and
              prevent the site from feeling institutional
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stakeholder Feedback</h2>
          <blockquote className={styles.quoteBlock}>
            &quot;The site looks great and so much more professional.&quot;
            <span className={styles.quoteSource}>HFWA Team</span>
          </blockquote>
          <blockquote className={styles.quoteBlock}>
            &quot;You are amazing, we can not thank you enough for all your
            help.&quot;
            <span className={styles.quoteSource}>HFWA Team</span>
          </blockquote>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I&apos;d Do Differently</h2>
          <p className={styles.bodyText}>
            I didn&apos;t do formal user research. I relied on stakeholder
            conversations and my own content audit. The team knew their problems well,
            so the direction was solid, but if I did this again, I&apos;d run
            task-based usability tests with a few Island Park residents before
            building. The Report a Sighting form is the highest-stakes interaction
            on the site, and I designed it based on assumptions about field use
            without actually watching someone try to submit a report from their phone
            on a trail. Stakeholder insights tell you what the organization needs.
            User testing tells you whether the interface actually delivers it.
          </p>
          <p className={styles.bodyText}>
            I designed desktop-first. A significant portion of this site&apos;s users
            are on mobile. Some are literally reporting bear sightings from a trail.
            Starting with desktop layouts in Figma and adapting for mobile meant
            responsive issues got caught late rather than designed for upfront. For a
            site with this usage context, mobile-first would have been the right
            call.
          </p>
          <p className={styles.bodyText}>
            Stakeholder reviews could have been more structured. I shared work at key
            milestones, but a more regular cadence, especially at the wireframe
            stage, would&apos;ve caught misalignments earlier and saved revision
            time during development. The most expensive feedback is feedback that
            arrives after something is already built.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Took Away</h2>
          <p className={styles.bodyText}>
            Designing for a real client, even as a volunteer, is a completely
            different thing than a personal project. You&apos;re navigating opinions,
            managing scope, making tradeoffs between what&apos;s ideal and what
            ships, and discovering that language and local politics matter as much as
            pixels.
          </p>
          <p className={styles.bodyText}>
            This project reinforced three things for me. CMS architecture is UX work:
            how content is structured in the backend directly determines whether a
            non-technical team can keep the site alive. The best design for a small
            team is the one they can actually maintain without outside help. And
            sometimes the most impactful design decision is choosing the right word
            instead of the right layout.
          </p>
        </section>

        <p className={styles.noteText}>
          Volunteer project for Henry&apos;s Fork Wildlife Alliance, a 501(c)(3) in
          Island Park, Idaho. Site partially live as of March 2026.
        </p>
      </div>
    </div>
  );
}
