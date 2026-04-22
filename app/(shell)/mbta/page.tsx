"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

// Lazy loaded iframe component
function LazyIframe({ src, title, className }: { src: string; title: string; className: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {isVisible ? (
        <iframe src={src} title={title} className={className} />
      ) : (
        <div className={styles.iframePlaceholder}>Loading prototype...</div>
      )}
    </div>
  );
}

export default function MBTAPage() {
  return (
    <>
      <div data-shell-content className={styles.page}>
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.category}>UX Case Study</p>
            <h1 className={styles.title}>
              Redesigning MBTA mTicket for the Fare Gate Era
            </h1>
            <p className={styles.subtitle}>
              How user research revealed that an app designed for conductors walking through train cars was failing riders rushing through fare gates.
            </p>

            <div className={styles.metaGrid}>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>Concept Project</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>2 weeks</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>UX Researcher</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Methods</span>
                <span className={styles.metaValue}>Review Analysis · User Personas · Prototyping</span>
              </div>
            </div>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>TL;DR</h2>
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>The 30-second version</h3>
              <p className={styles.bodyText}>
                The MBTA mTicket app is the only way to buy mobile tickets for Boston&apos;s Commuter Rail. With new fare gates rolling out at major stations, every tap and swipe now happens under pressure, in crowds, with trains to catch.
              </p>
              <p className={styles.bodyText}>
                After analyzing 50+ user reviews, I identified four core pain points: a 5-step ticket activation flow, payment friction on Android, zero real-time service info, and a confusing experience for visitors. Most fixes are low-effort, high-impact changes that could ship quickly.
              </p>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>50+</div>
                <div className={styles.statLabel}>Reviews Analyzed</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>5→2</div>
                <div className={styles.statLabel}>Steps to Activate</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>4</div>
                <div className={styles.statLabel}>Core Pain Points</div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Interactive Prototype</h2>
            <div className={styles.subsection}>
              <p className={styles.bodyText}>
                Explore the redesigned mTicket experience. This prototype demonstrates the key UX improvements: flattened ticket wallet, smart route shortcuts, Google Pay integration, zone education for visitors, and contextual service alerts.
              </p>
            </div>
            <div className={styles.prototypeContainer}>
              <div className={styles.phoneFrame}>
                <LazyIframe
                  src="/mbta-app/index.html"
                  className={styles.prototypeIframe}
                  title="MBTA mTicket Prototype"
                />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>01. The Context</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>A World That No Longer Exists</h3>
              <p className={styles.bodyText}>
                The mTicket app launched in 2012, back when Commuter Rail conductors walked through train cars checking tickets. The workflow was simple: buy a ticket, show it when asked, done.
              </p>
              <p className={styles.bodyText}>
                That world no longer exists. In October 2022, the MBTA installed fare gates at North Station. In December 2025, South Station followed with 40 new gates. Back Bay and Ruggles are next.
              </p>
              <p className={styles.bodyText}>
                Now, riders must scan their ticket twice per trip: once to enter, once to exit. They do this while walking toward gates, often carrying bags, in crowded stations, with trains departing in minutes. Every second of friction multiplies across thousands of daily interactions.
              </p>
            </div>

            <div className={styles.quoteCard}>
              <p className={styles.quoteText}>&quot;Some commuters use all the bad words for North Station&apos;s new fare gates.&quot;</p>
              <p className={styles.quoteSource}>Boston Globe headline, January 2023</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>02. Research Methodology</h2>
            
            <div className={styles.subsection}>
              <p className={styles.bodyText}>
                I analyzed user reviews from the Google Play Store and iOS App Store (2024-2025), supplemented by MBTA documentation and news coverage of the fare gate rollout.
              </p>
              <p className={styles.bodyText}>
                I filtered out bug reports and outages (engineering issues) and focused on UX problems that persist when the app works correctly. I prioritized complaints with multiple corroborating reviews or high &quot;helpful&quot; vote counts.
              </p>
              <p className={styles.bodyText}>
                What emerged were patterns: the same frustrations voiced by different people, months apart, often in strikingly similar language.
              </p>
            </div>

            <div className={styles.reviewGrid}>
              <div className={styles.reviewCard}>
                <Image
                  src="/mbta/reviews/review-1star-card-not-saved-4-years.png"
                  alt="1-star review about card not saving for 4 years"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>
              <div className={styles.reviewCard}>
                <Image
                  src="/mbta/reviews/review-1star-confusing-ui-back-navigation.png"
                  alt="1-star review about confusing UI and back navigation"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>
              <div className={styles.reviewCard}>
                <Image
                  src="/mbta/reviews/review-1star-confusing-zones-for-visitors.png"
                  alt="1-star review about confusing zones for visitors"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>
              <div className={styles.reviewCard}>
                <Image
                  src="/mbta/reviews/review-2star-cant-save-cvv-code.png"
                  alt="2-star review about inability to save CVV code"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>
              <div className={styles.reviewCard}>
                <Image
                  src="/mbta/reviews/review-3star-favorites-widget-swap-direction-requests.png"
                  alt="3-star review requesting favorites widget and swap direction"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>
              <div className={styles.reviewCard}>
                <Image
                  src="/mbta/reviews/review-3star-missing-native-alerts-schedules-widget.png"
                  alt="3-star review about missing native alerts and schedules widget"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>
              <div className={styles.reviewCard}>
                <Image
                  src="/mbta/reviews/review-4star-cvv-every-purchase-no-google-pay.png"
                  alt="4-star review about CVV re-entry and no Google Pay"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>
              <div className={styles.reviewCard}>
                <Image
                  src="/mbta/reviews/review-4star-no-realtime-delay-updates.png"
                  alt="4-star review about no real-time delay updates"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>
              <div className={styles.reviewCard}>
                <Image
                  src="/mbta/reviews/review-4star-not-intuitive-cvv-no-google-pay.png"
                  alt="4-star review about non-intuitive interface and no Google Pay"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>03. Meet the Users</h2>
            
            <div className={styles.subsection}>
              <p className={styles.bodyText}>
                Three distinct user types emerged from the research, each with different needs and pain points.
              </p>
            </div>

            <div className={styles.personaCard}>
              <div className={styles.personaHeader}>
                <h3 className={styles.personaName}>Sarah: The Daily Commuter</h3>
                <span className={styles.personaRole}>Financial Analyst, Framingham</span>
              </div>
              <p className={styles.personaDescription}>
                Takes the 7:12 AM train to South Station five days a week. Uses monthly passes or flex passes. Android user. Her routine is tightly optimized, but the mTicket app is the one variable she cannot optimize.
              </p>
              <div className={styles.personaPainPoints}>
                <h4 className={styles.painPointsTitle}>Pain Points:</h4>
                <ul className={styles.list}>
                  <li>Activating a ticket requires 5 steps, performed 10+ times per week</li>
                  <li>Has to re-enter CVV every time she buys a new flex pass</li>
                  <li>No home screen widget means fumbling with the app at fare gates</li>
                  <li>Favorites feature does not persist</li>
                </ul>
              </div>
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>&quot;I do the same thing every single day. Why do I have to tap through four screens to activate a ticket I bought last week for this exact trip?&quot;</p>
              </div>
            </div>

            <div className={styles.personaCard}>
              <div className={styles.personaHeader}>
                <h3 className={styles.personaName}>Marcus: The Occasional Rider</h3>
                <span className={styles.personaRole}>Software Developer (Remote), Jamaica Plain</span>
              </div>
              <p className={styles.personaDescription}>
                Takes the Commuter Rail 2-4 times per month for concerts, visiting family, meeting friends. iPhone user. He builds consumer apps for a living and notices every UX friction point.
              </p>
              <div className={styles.personaPainPoints}>
                <h4 className={styles.painPointsTitle}>Pain Points:</h4>
                <ul className={styles.list}>
                  <li>Card info does not save reliably between sessions</li>
                  <li>No map to discover stations or understand geography</li>
                  <li>Zone system is referenced but never explained</li>
                  <li>No real-time info to help decide whether to take the train or drive</li>
                </ul>
              </div>
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>&quot;I opened the app for the first time in a month and had to re-enter my entire credit card. Not just the CVV. The whole thing.&quot;</p>
              </div>
            </div>

            <div className={styles.personaCard}>
              <div className={styles.personaHeader}>
                <h3 className={styles.personaName}>Jennifer & David: The Visitors</h3>
                <span className={styles.personaRole}>Teachers from Ohio, First-time Boston Visitors</span>
              </div>
              <p className={styles.personaDescription}>
                Four-day vacation, want to visit Salem for the witch history. Comfortable with technology but unfamiliar with Boston&apos;s transit system.
              </p>
              <div className={styles.personaPainPoints}>
                <h4 className={styles.painPointsTitle}>Pain Points:</h4>
                <ul className={styles.list}>
                  <li>App name suggests coverage of all MBTA services; it does not</li>
                  <li>No map, no way to discover stations or see which terminal to use</li>
                  <li>Zone system is confusing without explanation</li>
                  <li>Android layout issues made the app nearly unusable</li>
                </ul>
              </div>
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>&quot;We downloaded &apos;MBTA mTicket&apos; thinking it would work for the subway too. We wasted 20 minutes trying to figure out why we couldn&apos;t find the Blue Line.&quot;</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>04. Pain Points & Solutions</h2>
            
            <div className={styles.painPointSection}>
              <h3 className={styles.subsectionTitle}>Pain Point 1: Ticket Activation Takes Too Long</h3>
              <p className={styles.bodyText}>
                Activating a ticket currently requires five steps: unlock phone, open app, navigate to Ticket Wallet, select the correct ticket, tap &quot;Activate.&quot; In a fare gate environment, users perform this sequence while walking toward gates, often with bags, in crowded conditions, under time pressure.
              </p>
              
              <div className={styles.screenshotGrid}>
                <div className={styles.screenshotCard}>
                  <span className={styles.screenshotLabel}>Current: Buried Ticket Wallet</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/mbta/before/MBTA-ticket-wallet.PNG"
                      alt="Ticket wallet buried in navigation"
                      width={390}
                      height={844}
                  loading="lazy"
                  className={styles.phoneImage}
                />
                  </div>
                </div>
                <div className={styles.screenshotCard}>
                  <span className={styles.screenshotLabel}>Current: Home Screen</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/mbta/before/MBTA-homescreen.jpg"
                      alt="Current homescreen"
                      width={390}
                      height={844}
                  loading="lazy"
                  className={styles.phoneImage}
                />
                  </div>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <h4 className={styles.solutionTitle}>Solution: Flatten the Ticket Wallet</h4>
                <p className={styles.solutionText}>
                  For users with fewer than 5 tickets, eliminate the Ticket Wallet as a separate screen. Purchased tickets display directly on the home screen as cards with an &quot;Activate&quot; button right there. No drill-down required. See this solution in the interactive prototype above.
                </p>
              </div>
            </div>

            <div className={styles.painPointSection}>
              <h3 className={styles.subsectionTitle}>Pain Point 2: Purchasing Creates Unnecessary Friction</h3>
              <p className={styles.bodyText}>
                Buying a ticket involves multiple friction points: CVV re-entry on every Android purchase, no quick route selection for daily commuters, broken favorites, and no way to swap origin/destination for return trips. This issue has persisted for 4+ years.
              </p>

              <div className={styles.screenshotGrid}>
                <div className={styles.screenshotCard}>
                  <span className={styles.screenshotLabel}>Current: Apple Pay Only (No Google Pay)</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/mbta/before/MBTA-payment-method.PNG"
                      alt="Payment screen with only Apple Pay"
                      width={390}
                      height={844}
                  loading="lazy"
                  className={styles.phoneImage}
                />
                  </div>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <h4 className={styles.solutionTitle}>Solutions</h4>
                <ul className={styles.list}>
                  <li><strong>Google Pay Integration:</strong> Parity with iOS Apple Pay, eliminating CVV entry through tokenized payment</li>
                  <li><strong>Smart Route Shortcuts:</strong> &quot;Your last trip&quot;, &quot;Return trip&quot;, and &quot;Frequent route&quot; as tappable cards</li>
                  <li><strong>Swap Button:</strong> One tap to reverse origin/destination for return trips</li>
                </ul>
                <p className={styles.solutionText} style={{ marginTop: '1rem' }}>
                  See these solutions demonstrated in the interactive prototype above.
                </p>
              </div>
            </div>

            <div className={styles.painPointSection}>
              <h3 className={styles.subsectionTitle}>Pain Point 3: No Real-Time Service Information</h3>
              <p className={styles.bodyText}>
                The mTicket app displays static schedules only. When trains are delayed, cancelled, or rerouted, users have no way to know this within the ticketing app. They must switch to a separate app to check real-time status.
              </p>

              <div className={styles.reviewCard} style={{ maxWidth: '800px' }}>
                <Image
                  src="/mbta/reviews/review-3star-missing-native-alerts-schedules-widget.png"
                  alt="3-star review requesting native alerts and schedules"
                  width={800}
                  height={300}
                  loading="lazy"
                  className={styles.reviewImage}
                />
              </div>

              <div className={styles.solutionCard}>
                <h4 className={styles.solutionTitle}>Solution: Contextual Alerts</h4>
                <p className={styles.solutionText}>
                  Rather than duplicating a full tracking app, integrate targeted delay information where it matters: display route-specific alerts on the home screen as dismissible banners, show current status when viewing or purchasing tickets, and personalize based on the user&apos;s recent routes.
                </p>
              </div>
            </div>

            <div className={styles.painPointSection}>
              <h3 className={styles.subsectionTitle}>Pain Point 4: Poor Experience for Visitors</h3>
              <p className={styles.bodyText}>
                The app assumes users already understand Boston&apos;s Commuter Rail system. For visitors and new riders, this creates barriers: no maps, no zone explanation, unclear app scope, and no wayfinding help.
              </p>

              <div className={styles.screenshotGrid}>
                <div className={styles.screenshotCard}>
                  <span className={styles.screenshotLabel}>Current: Zones Without Context</span>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/mbta/before/MBTA-select-origin-station.jpg"
                      alt="Station list with zones but no explanation"
                      width={390}
                      height={844}
                  loading="lazy"
                  className={styles.phoneImage}
                />
                  </div>
                </div>
              </div>

              <div className={styles.solutionCard}>
                <h4 className={styles.solutionTitle}>Solutions</h4>
                <ul className={styles.list}>
                  <li><strong>Onboarding Clarity:</strong> First-launch screen stating &quot;Commuter Rail & Ferry Only&quot; with &quot;I&apos;m a Regular Rider&quot; vs &quot;I&apos;m Visiting Boston&quot; paths</li>
                  <li><strong>Interactive Zone Map:</strong> Visual map showing all zones with color coding and station locations</li>
                  <li><strong>Zone Explainer:</strong> Contextual help button next to every zone reference</li>
                </ul>
                <p className={styles.solutionText} style={{ marginTop: '1rem' }}>
                  See these solutions demonstrated in the interactive prototype above.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>05. Solution Prioritization</h2>
            
            <div className={styles.subsection}>
              <p className={styles.bodyText}>
                Not all solutions require equal effort or deliver equal impact. The prioritization matrix focuses on quick wins that could ship immediately while building toward larger improvements.
              </p>
            </div>

            <div className={styles.priorityTable}>
              <div className={styles.priorityRow}>
                <span className={styles.priorityLabel}>Immediate</span>
                <span className={styles.priorityItems}>Fix Android layout · Restore activation visibility · Fix favorites</span>
              </div>
              <div className={styles.priorityRow}>
                <span className={styles.priorityLabel}>Quick Wins</span>
                <span className={styles.priorityItems}>Onboarding clarity · Zone explainer · Surface alerts · Flatten wallet</span>
              </div>
              <div className={styles.priorityRow}>
                <span className={styles.priorityLabel}>High Value</span>
                <span className={styles.priorityItems}>Home screen widget · Google Pay · Smart route shortcuts</span>
              </div>
              <div className={styles.priorityRow}>
                <span className={styles.priorityLabel}>Strategic</span>
                <span className={styles.priorityItems}>Interactive zone map · Contextual delay alerts</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>06. Metrics for Success</h2>
            
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricLabel}>Time to Activate</div>
                <div className={styles.metricValues}>
                  <span className={styles.metricBefore}>15-20 sec</span>
                  <span className={styles.metricArrow}>→</span>
                  <span className={styles.metricAfter}>&lt;5 sec</span>
                </div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricLabel}>Steps to Activate</div>
                <div className={styles.metricValues}>
                  <span className={styles.metricBefore}>5 steps</span>
                  <span className={styles.metricArrow}>→</span>
                  <span className={styles.metricAfter}>1-2 taps</span>
                </div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricLabel}>App Store Rating</div>
                <div className={styles.metricValues}>
                  <span className={styles.metricBefore}>~2.5/5</span>
                  <span className={styles.metricArrow}>→</span>
                  <span className={styles.metricAfter}>3.5+/5</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>07. Conclusion</h2>
            
            <div className={styles.subsection}>
              <p className={styles.bodyText}>
                The mTicket app is not broken. It works. You can buy tickets, activate them, and scan through fare gates.
              </p>
              <p className={styles.bodyText}>
                But &quot;it works&quot; is a low bar for an app that thousands of people rely on daily. The frustrations in the reviews are not about crashes or bugs. They are about friction that adds up over hundreds of uses. They are about an app designed for one era being forced into another.
              </p>
              <p className={styles.bodyText}>
                The good news: most of the highest-impact solutions are low-effort fixes. Restoring activation visibility, fixing favorites, adding route shortcuts, and clarifying scope for visitors could all ship quickly. The home screen widget and Google Pay integration require more work but deliver clear, measurable value.
              </p>
              <p className={styles.bodyTextHighlight}>
                The fare gates are here. The question is whether the app will catch up.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Sources</h2>
            
            <div className={styles.sourcesGrid}>
              <div className={styles.sourceCard}>
                <h4 className={styles.sourceTitle}>App Stores</h4>
                <ul className={styles.sourceList}>
                  <li>Google Play Store: MBTA mTicket reviews (Aug 2024 - Dec 2025)</li>
                  <li>iOS App Store: MBTA mTicket reviews (Jan 2024 - Dec 2025)</li>
                </ul>
              </div>
              <div className={styles.sourceCard}>
                <h4 className={styles.sourceTitle}>News Coverage</h4>
                <ul className={styles.sourceList}>
                  <li>Boston Globe: &quot;Some commuters use all the bad words for North Station&apos;s new fare gates&quot; (Jan 24, 2023)</li>
                  <li>Boston.com: &quot;South Station fare gates are scheduled to go live in December&quot; (Nov 19, 2025)</li>
                  <li>WBUR: &quot;MBTA says commuter rail fare gates coming this year to two train hubs&quot; (March 6, 2025)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

