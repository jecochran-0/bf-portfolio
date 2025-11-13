import styles from "./page.module.css";

export default function GrammarlyGoPage() {
  return (
    <>
      <div data-shell-content className={styles.page}>
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.category}>UX Research Case Study</p>
            <h1 className={styles.title}>IMPROVING GRAMMARLY GO RETENTION</h1>
            <p className={styles.subtitle}>
              Turning one-time AI users into loyal daily writers through strategic UX research and product optimization
            </p>
          </header>

          <div className={styles.disclaimer}>
            <p className={styles.disclaimerText}>
              <strong>Disclaimer:</strong> The initial numbers presented in this case study are fabricated for demonstration purposes to illustrate the research methodology and analytical framework.
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Background Context</h2>
            <p className={styles.bodyText}>
              GrammarlyGO is Grammarly&apos;s embedded AI assistant designed to speed up content creation and help users write more confidently across platforms. It can draft email replies, rewrite sentences for tone or clarity, or brainstorm content ideas using preset prompts or custom instructions.
            </p>
            <p className={styles.bodyText}>
              Despite high brand trust and broad distribution, GrammarlyGO suffers from low re-engagement:
            </p>
            <ul className={styles.list}>
              <li>60% of users try GrammarlyGO once but do not return in the next 7 days</li>
              <li>Premium users show only slightly higher engagement than free users</li>
              <li>Feedback suggests confusion about what the AI assistant does differently from standard Grammarly corrections</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Problem Framing</h2>
            <p className={styles.bodyText}>
              GrammarlyGO is solving a time problem, as well as a quality problem. For people that type a lot (emails, docs, etc), GrammarlyGO is an embedded assistant that takes care of nuanced tasks, or revises completed ones.
            </p>
            <p className={styles.bodyText}>
              60% of users disengaging after the first use means that the features had too much friction to be worth using, or the features were simply never too useful in the first place. A 60% disengagement rate means lost money through CAC and LTV.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Business Impact Analysis</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Customer Acquisition Cost (CAC)</h3>
              <p className={styles.bodyText}>Let&apos;s assume Grammarly spends:</p>
              <ul className={styles.list}>
                <li>$2,000,000 on ads (YouTube, Google, Instagram)</li>
                <li>$500,000 on referral programs, email campaigns, partnerships</li>
                <li>$500,000 on internal growth team salaries and tools</li>
              </ul>
              <p className={styles.bodyText}>
                <strong>Total acquisition cost:</strong> $3,000,000<br />
                <strong>New Premium users acquired:</strong> 250,000<br />
                <strong>CAC = $3,000,000 / 250,000 = $12 per user</strong>
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Lifetime Value (LTV)</h3>
              <ul className={styles.list}>
                <li>Grammarly Premium subscription: $12/month = $144/year</li>
                <li>Average Premium user stays subscribed for 1.5 years</li>
                <li>Gross revenue per user: $216</li>
                <li>Assuming 80% profit margin after operational costs</li>
              </ul>
              <p className={styles.bodyText}>
                <strong>LTV = $216 × 0.8 = $172.80 per user</strong>
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Impact of Disengagement</h3>
              <p className={styles.bodyText}>If a user tries GrammarlyGO once but doesn&apos;t engage:</p>
              <ul className={styles.list}>
                <li>They&apos;re less likely to renew</li>
                <li>Their average lifetime drops to 1 year</li>
                <li>New revenue = $144 × 0.8 = $115.20 LTV</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>$160.80</div>
                <div className={styles.statLabel}>Engaged User Profit</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>$103.20</div>
                <div className={styles.statLabel}>Disengaged User Profit</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>36%</div>
                <div className={styles.statLabel}>Less Profit</div>
              </div>
            </div>

            <p className={styles.bodyText}>
              <strong>Result:</strong> A disengaged user generates 36% less profit. At scale, if 100,000 users disengage after first use, Grammarly loses over $5.7 million in potential long-term value.
            </p>

            <div className={styles.highlightGrid}>
              <div className={styles.highlightCard}>
                <div className={styles.highlightValue}>60%</div>
                <div className={styles.highlightLabel}>Users disengage after first use</div>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightValue}>$5.7M</div>
                <div className={styles.highlightLabel}>Potential value at stake</div>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightValue}>25%</div>
                <div className={styles.highlightLabel}>Retention improvement goal</div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROBLEM FRAMING</h2>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>What is GrammarlyGO?</h3>
                <p className={styles.infoCardText}>
                  GrammarlyGO is Grammarly&apos;s embedded AI assistant designed to speed up content creation and help users write more confidently across platforms.
                </p>
                <ul className={styles.infoCardList}>
                  <li>Draft email replies</li>
                  <li>Rewrite sentences for tone or clarity</li>
                  <li>Brainstorm content ideas using preset prompts</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Business Impact</h3>
                <div className={styles.metricRow}>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>$12</div>
                    <div className={styles.metricLabel}>CAC per user</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>$172.80</div>
                    <div className={styles.metricLabel}>Engaged User LTV</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>$115.20</div>
                    <div className={styles.metricLabel}>Disengaged User LTV</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>36%</div>
                    <div className={styles.metricLabel}>Profit Loss</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>RESEARCH HYPOTHESES</h2>
            <div className={styles.hypothesisGrid}>
              <div className={styles.hypothesisCard}>
                <h3 className={styles.hypothesisTitle}>Too Similar to Classic Grammarly</h3>
                <p className={styles.hypothesisText}>Users don&apos;t see a difference between GrammarlyGO and standard Grammarly corrections</p>
              </div>
              <div className={styles.hypothesisCard}>
                <h3 className={styles.hypothesisTitle}>Too Much User Friction</h3>
                <p className={styles.hypothesisText}>The process of using features takes too long for seamless integration</p>
              </div>
              <div className={styles.hypothesisCard}>
                <h3 className={styles.hypothesisTitle}>Features Not Useful Enough</h3>
                <p className={styles.hypothesisText}>Users prefer to keep their writing as-is or revise it themselves</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>RESEARCH METHODOLOGY</h2>
            
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Research Objective</h3>
              <p className={styles.bodyText}>
                Understand why new users disengage from GrammarlyGO after first use, what friction exists in the user experience, and what changes would increase return usage.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Research Methods Overview</h3>
              <div className={styles.methodsTable}>
                <div className={styles.methodsHeader}>
                  <div className={styles.methodsCell}>Method</div>
                  <div className={styles.methodsCell}>Type</div>
                  <div className={styles.methodsCell}>Goal</div>
                </div>
                <div className={styles.methodsRow}>
                  <div className={styles.methodsCell}>Product Analytics Review</div>
                  <div className={styles.methodsCell}>Quantitative</div>
                  <div className={styles.methodsCell}>Understand user behavior at scale — identify drop-offs and usage patterns</div>
                </div>
                <div className={styles.methodsRow}>
                  <div className={styles.methodsCell}>Unmoderated Usability Testing</div>
                  <div className={styles.methodsCell}>Qualitative</div>
                  <div className={styles.methodsCell}>Observe interaction friction points in key use cases</div>
                </div>
                <div className={styles.methodsRow}>
                  <div className={styles.methodsCell}>Semi-Structured User Interviews</div>
                  <div className={styles.methodsCell}>Qualitative</div>
                  <div className={styles.methodsCell}>Explore expectations, mental models, motivations, and trust</div>
                </div>
                <div className={styles.methodsRow}>
                  <div className={styles.methodsCell}>In-Product Intercept Surveys</div>
                  <div className={styles.methodsCell}>Quantitative</div>
                  <div className={styles.methodsCell}>Capture user intent and satisfaction at the point of usage</div>
                </div>
              </div>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Recruitment Plan</h3>
              
              <div className={styles.recruitmentGrid}>
                <div className={styles.recruitmentCard}>
                  <div className={styles.recruitmentPercentage}>60%</div>
                  <h4 className={styles.recruitmentTitle}>Disengaged Users</h4>
                  <p className={styles.recruitmentText}>Tried GrammarlyGO once, haven&apos;t used since</p>
                </div>
                <div className={styles.recruitmentCard}>
                  <div className={styles.recruitmentPercentage}>20%</div>
                  <h4 className={styles.recruitmentTitle}>Power Users</h4>
                  <p className={styles.recruitmentText}>Daily GrammarlyGO users, &gt;3 months</p>
                </div>
                <div className={styles.recruitmentCard}>
                  <div className={styles.recruitmentPercentage}>20%</div>
                  <h4 className={styles.recruitmentTitle}>Churned Users</h4>
                  <p className={styles.recruitmentText}>Canceled Grammarly Premium or switched to competitor</p>
                </div>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionSubtitle}>Sourcing Strategy</h4>
                <ul className={styles.list}>
                  <li>Internal CRM data (usage tracking via product analytics)</li>
                  <li>Email outreach + incentives ($25 gift card)</li>
                  <li>For surveys: Random sample triggered in-product after first use</li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionSubtitle}>Selection Criteria</h4>
                <p className={styles.bodyText}>
                  All users should be familiar with classic Grammarly, and are in an environment where GrammarlyGO is intended to be most useful (the user types a lot through the day). This is so we can isolate the problem to GrammarlyGO, instead of receiving feedback irrelevant to the problem.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>DETAILED RESEARCH FINDINGS</h2>

            <div className={styles.findingCard}>
              <div className={styles.findingHeader}>
                <h3 className={styles.findingTitle}>1. Product Analytics Review (Amplitude)</h3>
                <div className={styles.findingType}>Quantitative</div>
              </div>
              <p className={styles.findingGoal}>
                Understand user behavior at scale — identify drop-offs and usage patterns
              </p>
              <div className={styles.findingKey}>
                <strong>Key Finding:</strong> Only 12% of users returned within 7 days
              </div>
              <div className={styles.findingSample}>
                <strong>2,847 users analyzed</strong>
              </div>

              <div className={styles.funnel}>
                <h4 className={styles.funnelTitle}>Funnel: GrammarlyGO Usage – First 14 Days</h4>
                
                <div className={styles.funnelStep}>
                  <div className={styles.funnelStepHeader}>
                    <div className={styles.funnelStepTitle}>Clicked &quot;GrammarlyGO&quot; button</div>
                    <div className={styles.funnelStepPercent}>100%</div>
                  </div>
                  <div className={styles.funnelStepContent}>
                    <p className={styles.funnelInsight}><strong>Key Insights:</strong></p>
                    <ul className={styles.funnelList}>
                      <li>All users start here - this is our baseline</li>
                      <li>High initial interest shows strong brand recognition</li>
                      <li>Users are curious about the AI assistant</li>
                    </ul>
                    <p className={styles.funnelQuote}>&quot;I saw the GrammarlyGO button and wanted to try it&quot;</p>
                  </div>
                </div>

                <div className={styles.funnelStep}>
                  <div className={styles.funnelStepHeader}>
                    <div className={styles.funnelStepTitle}>Select a writing mode (rewrite, shorten, etc.)</div>
                    <div className={styles.funnelStepPercent}>58%</div>
                    <div className={styles.funnelDropoff}>↓42%</div>
                  </div>
                  <div className={styles.funnelStepContent}>
                    <p className={styles.funnelInsight}><strong>Key Insights:</strong></p>
                    <ul className={styles.funnelList}>
                      <li>42% of users exit before even selecting a mode</li>
                      <li>This suggests confusion about what GrammarlyGO does</li>
                      <li>Users may not understand the different options</li>
                    </ul>
                    <p className={styles.funnelQuote}>&quot;I wasn&apos;t sure what &apos;rewrite&apos; would do to my text&quot;</p>
                    <p className={styles.funnelQuote}>&quot;The options seemed overwhelming&quot;</p>
                    <p className={styles.funnelDropoffImpact}><strong>Drop-off Impact:</strong> 42% of users never select a mode</p>
                  </div>
                </div>

                <div className={styles.funnelStep}>
                  <div className={styles.funnelStepHeader}>
                    <div className={styles.funnelStepTitle}>Generated output</div>
                    <div className={styles.funnelStepPercent}>41%</div>
                    <div className={styles.funnelDropoff}>↓17%</div>
                  </div>
                  <div className={styles.funnelStepContent}>
                    <p className={styles.funnelInsight}><strong>Key Insights:</strong></p>
                    <ul className={styles.funnelList}>
                      <li>Only 41% of users get to see AI-generated content</li>
                      <li>17% drop-off from mode selection to generation</li>
                      <li>Users may be hesitant about AI output quality</li>
                    </ul>
                    <p className={styles.funnelQuote}>&quot;I was worried it would change my writing too much&quot;</p>
                    <p className={styles.funnelQuote}>&quot;I wanted to see what it would do first&quot;</p>
                    <p className={styles.funnelDropoffImpact}><strong>Drop-off Impact:</strong> 17% don&apos;t generate content</p>
                  </div>
                </div>

                <div className={styles.funnelStep}>
                  <div className={styles.funnelStepHeader}>
                    <div className={styles.funnelStepTitle}>Applied output to document</div>
                    <div className={styles.funnelStepPercent}>24%</div>
                    <div className={styles.funnelDropoff}>↓17%</div>
                  </div>
                  <div className={styles.funnelStepContent}>
                    <p className={styles.funnelInsight}><strong>Key Insights:</strong></p>
                    <ul className={styles.funnelList}>
                      <li>Only 24% actually use the generated content</li>
                      <li>17% drop-off suggests output quality issues</li>
                      <li>Users may not trust the AI suggestions</li>
                    </ul>
                    <p className={styles.funnelQuote}>&quot;The output didn&apos;t sound like me&quot;</p>
                    <p className={styles.funnelQuote}>&quot;It was too formal for what I was writing&quot;</p>
                    <p className={styles.funnelDropoffImpact}><strong>Drop-off Impact:</strong> 17% don&apos;t apply the output</p>
                  </div>
                </div>

                <div className={styles.funnelStep}>
                  <div className={styles.funnelStepHeader}>
                    <div className={styles.funnelStepTitle}>Returned to use GrammarlyGO again (7-day window)</div>
                    <div className={styles.funnelStepPercent}>12%</div>
                    <div className={styles.funnelDropoff}>↓76%</div>
                  </div>
                  <div className={styles.funnelStepContent}>
                    <p className={styles.funnelInsight}><strong>Key Insights:</strong></p>
                    <ul className={styles.funnelList}>
                      <li>Only 12% return within a week</li>
                      <li>This is the critical retention metric</li>
                      <li>88% of users don&apos;t find enough value to return</li>
                    </ul>
                    <p className={styles.funnelQuote}>&quot;I tried it once but didn&apos;t see the point&quot;</p>
                    <p className={styles.funnelQuote}>&quot;It didn&apos;t solve any real problems for me&quot;</p>
                    <p className={styles.funnelDropoffImpact}><strong>Drop-off Impact:</strong> 76% don&apos;t return within a week</p>
                  </div>
                </div>
              </div>

              <div className={styles.criticalInsight}>
                <strong>Critical Insight:</strong> 88% of users abandon GrammarlyGO after their first use. This represents a massive opportunity cost - users are interested enough to try it, but the experience fails to deliver enough value to drive retention. The biggest drop-off occurs at the mode selection stage (42% exit), suggesting fundamental UX issues with discoverability and clarity.
              </div>

              <div className={styles.behaviorSegments}>
                <h4 className={styles.subsectionSubtitle}>Behavior Segments</h4>
                <ul className={styles.list}>
                  <li>Users using &quot;Shorten&quot; or &quot;Rewrite Tone&quot; features: 70% of returners</li>
                  <li>&quot;Professional tone&quot; was selected 3× more than other tones</li>
                  <li>33% of first-time users exited before selecting a writing mode</li>
                </ul>
              </div>
            </div>

            <div className={styles.findingCard}>
              <div className={styles.findingHeader}>
                <h3 className={styles.findingTitle}>2. Unmoderated Usability Testing (Maze)</h3>
                <div className={styles.findingType}>Qualitative</div>
              </div>
              <p className={styles.findingGoal}>
                Observe interaction friction points in key use cases
              </p>
              <div className={styles.findingKey}>
                <strong>Key Finding:</strong> 9/15 didn&apos;t notice GrammarlyGO icon difference
              </div>
              <div className={styles.findingSample}>
                <strong>15 participants via Maze</strong>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionSubtitle}>Scenario Tasks</h4>
                <ul className={styles.list}>
                  <li>Rewrite a Slack message to sound more confident</li>
                  <li>Summarize a paragraph to be more concise</li>
                  <li>Brainstorm talking points for an email</li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionSubtitle}>Key Observations (15 participants)</h4>
                <ul className={styles.list}>
                  <li>9/15 didn&apos;t notice the GrammarlyGO icon was different from classic Grammarly</li>
                  <li>7/15 clicked the standard Grammarly &quot;correct&quot; button instead of the AI rewrite tool</li>
                  <li>10/15 completed the task but took longer than expected (avg. 2.4 minutes/task)</li>
                  <li>5/15 expected a full-chat interface like ChatGPT</li>
                  <li>4/15 were unsure if their tone setting had any real effect</li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionSubtitle}>Key Quotes:</h4>
                <p className={styles.quote}>&quot;I thought this would be a chatbot like ChatGPT.&quot;</p>
                <p className={styles.quote}>&quot;I wasn&apos;t sure if it actually changed the tone or just fixed grammar.&quot;</p>
                <p className={styles.quote}>&quot;Why do I have to re-highlight every time? That&apos;s annoying.&quot;</p>
              </div>
            </div>

            <div className={styles.findingCard}>
              <div className={styles.findingHeader}>
                <h3 className={styles.findingTitle}>3. User Interviews (10 participants: 6 disengaged, 2 power, 2 churned)</h3>
                <div className={styles.findingType}>Qualitative</div>
              </div>
              <p className={styles.findingGoal}>
                Explore expectations, mental models, motivations, and trust
              </p>
              <div className={styles.findingKey}>
                <strong>Key Finding:</strong> 7/10 users expected a chatbot experience
              </div>
              <div className={styles.findingSample}>
                <strong>10 participants (6 disengaged, 2 power, 2 churned)</strong>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionSubtitle}>Research Questions</h4>
                <ul className={styles.list}>
                  <li>What were you hoping GrammarlyGO would help with?</li>
                  <li>What was confusing or frustrating about your last use?</li>
                  <li>When do you choose to use GrammarlyGO instead of classic Grammarly?</li>
                  <li>What would make this worth using more often?</li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionSubtitle}>Key Findings</h4>
                <ul className={styles.list}>
                  <li>Expectation mismatch: 7/10 thought GrammarlyGO was a chatbot experience</li>
                  <li>Usefulness gap: 5/10 didn&apos;t feel the output added much value beyond their own edits</li>
                  <li>Frustration with UI: 6/10 found the controls non-intuitive</li>
                  <li>Power users appreciated tone control and speed, but set up their own shortcuts</li>
                  <li>Churned users switched to ChatGPT for more flexible responses</li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h4 className={styles.subsectionSubtitle}>Key Quotes:</h4>
                <p className={styles.quote}>&quot;It felt like Grammarly but slightly smarter, not something I&apos;d pay extra for.&quot;</p>
                <p className={styles.quote}>&quot;I&apos;d use it more if I didn&apos;t have to dig around to find it.&quot;</p>
                <p className={styles.quote}>&quot;I wanted suggestions, not full rewrites that sound weirdly robotic.&quot;</p>
              </div>
            </div>

            <div className={styles.findingCard}>
              <div className={styles.findingHeader}>
                <h3 className={styles.findingTitle}>4. In-Product Intercept Survey (Hotjar | n = 342 responses)</h3>
                <div className={styles.findingType}>Quantitative</div>
              </div>
              <p className={styles.findingGoal}>
                Capture user intent and satisfaction at the point of usage
              </p>
              <div className={styles.findingKey}>
                <strong>Key Finding:</strong> Only 19% felt it helped accomplish their goal
              </div>
              <div className={styles.findingSample}>
                <strong>342 responses via Hotjar</strong>
              </div>

              <div className={styles.surveyResults}>
                <div className={styles.surveyQuestion}>
                  <h4 className={styles.surveyQuestionTitle}>Q1: What were you trying to do with GrammarlyGO?</h4>
                  <div className={styles.surveyAnswers}>
                    <div className={styles.surveyAnswer}>
                      <div className={styles.surveyAnswerBar} style={{ width: "45%" }} />
                      <div className={styles.surveyAnswerLabel}>Speed up writing</div>
                      <div className={styles.surveyAnswerPercent}>45%</div>
                    </div>
                    <div className={styles.surveyAnswer}>
                      <div className={styles.surveyAnswerBar} style={{ width: "30%" }} />
                      <div className={styles.surveyAnswerLabel}>Improve tone</div>
                      <div className={styles.surveyAnswerPercent}>30%</div>
                    </div>
                    <div className={styles.surveyAnswer}>
                      <div className={styles.surveyAnswerBar} style={{ width: "17%" }} />
                      <div className={styles.surveyAnswerLabel}>Brainstorm</div>
                      <div className={styles.surveyAnswerPercent}>17%</div>
                    </div>
                    <div className={styles.surveyAnswer}>
                      <div className={styles.surveyAnswerBar} style={{ width: "8%" }} />
                      <div className={styles.surveyAnswerLabel}>Not sure / exploring</div>
                      <div className={styles.surveyAnswerPercent}>8%</div>
                    </div>
                  </div>
                </div>

                <div className={styles.surveyQuestion}>
                  <h4 className={styles.surveyQuestionTitle}>Q2: Did it help you accomplish your goal?</h4>
                  <div className={styles.surveyAnswers}>
                    <div className={styles.surveyAnswer}>
                      <div className={styles.surveyAnswerBar} style={{ width: "19%" }} />
                      <div className={styles.surveyAnswerLabel}>Yes</div>
                      <div className={styles.surveyAnswerPercent}>19%</div>
                    </div>
                    <div className={styles.surveyAnswer}>
                      <div className={styles.surveyAnswerBar} style={{ width: "42%" }} />
                      <div className={styles.surveyAnswerLabel}>Partially</div>
                      <div className={styles.surveyAnswerPercent}>42%</div>
                    </div>
                    <div className={styles.surveyAnswer}>
                      <div className={styles.surveyAnswerBar} style={{ width: "39%" }} />
                      <div className={styles.surveyAnswerLabel}>No</div>
                      <div className={styles.surveyAnswerPercent}>39%</div>
                    </div>
                  </div>
                </div>

                <div className={styles.surveyQuestion}>
                  <h4 className={styles.surveyQuestionTitle}>Q3 Open-ended (sampled):</h4>
                  <div className={styles.openEndedQuotes}>
                    <p className={styles.quote}>&quot;I couldn&apos;t tell the difference between GrammarlyGO and normal Grammarly.&quot;</p>
                    <p className={styles.quote}>&quot;It was hard to find tone controls.&quot;</p>
                    <p className={styles.quote}>&quot;It rewrote too much. I just wanted small edits.&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>KEY INSIGHTS & FINDINGS</h2>

            <div className={styles.insightsTable}>
              <div className={styles.insightsHeader}>
                <div className={styles.insightsCell}>Theme</div>
                <div className={styles.insightsCell}>Supporting Evidence</div>
                <div className={styles.insightsCell}>What It Means</div>
              </div>
              <div className={styles.insightsRow}>
                <div className={styles.insightsCell}>
                  <strong>Expectations mismatch</strong>
                </div>
                <div className={styles.insightsCell}>Interviews, Usability, Survey</div>
                <div className={styles.insightsCell}>Users think GrammarlyGO will act like ChatGPT, not a rewrite tool</div>
              </div>
              <div className={styles.insightsRow}>
                <div className={styles.insightsCell}>
                  <strong>Discoverability issues</strong>
                </div>
                <div className={styles.insightsCell}>Analytics, Usability Testing</div>
                <div className={styles.insightsCell}>Users can&apos;t easily find GrammarlyGO or don&apos;t know they&apos;re using it</div>
              </div>
              <div className={styles.insightsRow}>
                <div className={styles.insightsCell}>
                  <strong>Frustration with tone control & UI</strong>
                </div>
                <div className={styles.insightsCell}>Usability, Survey, Interviews</div>
                <div className={styles.insightsCell}>Tone options unclear; too many clicks to refine/edit content</div>
              </div>
              <div className={styles.insightsRow}>
                <div className={styles.insightsCell}>
                  <strong>Output felt excessive or impersonal</strong>
                </div>
                <div className={styles.insightsCell}>Interviews, Survey</div>
                <div className={styles.insightsCell}>Users want tweaks, not full rewrites; don&apos;t trust &quot;robotic&quot; style</div>
              </div>
              <div className={styles.insightsRow}>
                <div className={styles.insightsCell}>
                  <strong>Power users find workarounds</strong>
                </div>
                <div className={styles.insightsCell}>Interviews</div>
                <div className={styles.insightsCell}>Advanced users manually customize inputs, showing need for presets or macros</div>
              </div>
            </div>

            <div className={styles.playbackSummary}>
              <h3 className={styles.playbackTitle}>Playback Summary</h3>
              <p className={styles.playbackText}>
                Our research uncovered a core issue: users expect GrammarlyGO to act like a conversation-based assistant (like ChatGPT), but instead find a rigid tool hidden behind complex UI.
              </p>
              <p className={styles.playbackText}>
                This leads to:
              </p>
              <ul className={styles.list}>
                <li>Low trust in the tool&apos;s usefulness</li>
                <li>Low visibility and discoverability</li>
                <li>Output that feels over-edited and impersonal</li>
              </ul>
              <p className={styles.playbackText}>
                Even engaged users work around the friction manually — meaning the product isn&apos;t supporting them efficiently either.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PRIORITIZED PROBLEM AREAS</h2>

            <div className={styles.priorityGrid}>
              <div className={styles.priorityCard}>
                <div className={styles.priorityBadge}>High Priority</div>
                <h3 className={styles.priorityTitle}>Clarify Value Prop of GrammarlyGO vs. Classic Grammarly</h3>
                <p className={styles.priorityRationale}><strong>Rationale:</strong> Prevents expectation mismatch and early churn</p>
                <div className={styles.priorityImpact}>
                  <strong>Bottom Line Impact:</strong>
                  <ul className={styles.list}>
                    <li>Reduces churn after first use → protects LTV</li>
                    <li>Increases adoption of GrammarlyGO among paying users → drives usage-based retention</li>
                    <li>Improves feature ROI → ensures investment in AI is seen as valuable</li>
                    <li>Boosts conversion from free to Premium, if GrammarlyGO is perceived as a clear differentiator</li>
                  </ul>
                </div>
              </div>

              <div className={styles.priorityCard}>
                <div className={styles.priorityBadge}>High Priority</div>
                <h3 className={styles.priorityTitle}>Improve Discoverability in Product UI</h3>
                <p className={styles.priorityRationale}><strong>Rationale:</strong> Makes usage frictionless and increases re-engagement</p>
                <div className={styles.priorityImpact}>
                  <strong>Bottom Line Impact:</strong>
                  <ul className={styles.list}>
                    <li>Increases repeat usage → key LTV driver (returning users stay longer)</li>
                    <li>Reduces support costs → fewer users get lost or confused</li>
                    <li>Drives feature stickiness → improves engagement scores used in renewal models</li>
                    <li>Amplifies freemium funnel performance → more value in early days = more upgrades</li>
                  </ul>
                </div>
              </div>

              <div className={styles.priorityCard}>
                <div className={styles.priorityBadge}>Medium Priority</div>
                <h3 className={styles.priorityTitle}>Add Lightweight Editing Tools (Undo, Rephrase, Tone Presets)</h3>
                <p className={styles.priorityRationale}><strong>Rationale:</strong> Empowers users with control without added complexity</p>
                <div className={styles.priorityImpact}>
                  <strong>Bottom Line Impact:</strong>
                  <ul className={styles.list}>
                    <li>Builds trust in AI output → increases usage frequency</li>
                    <li>Reduces task abandonment → improves session quality</li>
                    <li>Differentiates GrammarlyGO from competitors → improves retention in a crowded AI market</li>
                  </ul>
                </div>
              </div>

              <div className={styles.priorityCard}>
                <div className={styles.priorityBadge}>Medium Priority</div>
                <h3 className={styles.priorityTitle}>Personalize Onboarding Based on User Goal</h3>
                <p className={styles.priorityRationale}><strong>Rationale:</strong> Aligns tool suggestions to user intent</p>
                <div className={styles.priorityImpact}>
                  <strong>Bottom Line Impact:</strong>
                  <ul className={styles.list}>
                    <li>Increases activation rate → users reach their &apos;aha&apos; moment faster</li>
                    <li>Improves first-week retention → strongest predictor of long-term LTV</li>
                    <li>Reduces cognitive friction → boosts satisfaction (CSAT), especially among new users</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROPOSED SOLUTIONS</h2>

            <div className={styles.solutionCard}>
              <div className={styles.solutionHeader}>
                <div className={styles.solutionNumber}>01</div>
                <div className={styles.solutionPriority}>High Priority | High Impact</div>
              </div>
              <h3 className={styles.solutionTitle}>Contextual GrammarlyGO Activation</h3>
              <div className={styles.solutionContent}>
                <p className={styles.solutionDescription}>
                  Instead of onboarding screens, trigger GrammarlyGO at moments of struggle.
                </p>
                <div className={styles.solutionImplementation}>
                  <strong>Implementation:</strong>
                  <ul className={styles.list}>
                    <li>Use ML to detect hesitation, backspacing, or long idle time</li>
                    <li>Offer GrammarlyGO with contextual suggestions based on what the user is writing</li>
                  </ul>
                </div>
                <div className={styles.solutionWhy}>
                  <strong>Why it&apos;s better:</strong>
                  <ul className={styles.list}>
                    <li>Activated when it&apos;s needed, not before. Respects user flow</li>
                    <li>Ties AI to solving an immediate pain point, which builds trust</li>
                  </ul>
                </div>
                <div className={styles.solutionMetrics}>
                  <strong>Metrics to track:</strong>
                  <ul className={styles.list}>
                    <li>GrammarlyGO activation rate during &apos;writer&apos;s block&apos; moments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionHeader}>
                <div className={styles.solutionNumber}>02</div>
                <div className={styles.solutionPriority}>High Priority | High Impact</div>
              </div>
              <h3 className={styles.solutionTitle}>Live Preview Panel with Transparent Output Logic</h3>
              <div className={styles.solutionContent}>
                <p className={styles.solutionDescription}>
                  Show GrammarlyGO&apos;s draft evolving in real time with a &apos;why we chose this&apos; explanation.
                </p>
                <div className={styles.solutionImplementation}>
                  <strong>Implementation:</strong>
                  <ul className={styles.list}>
                    <li>Let users preview multiple tones or structures without rerunning prompts</li>
                    <li>Display output as a &apos;guided draft,&apos; not a black-box result</li>
                  </ul>
                </div>
                <div className={styles.solutionWhy}>
                  <strong>Why it&apos;s better:</strong>
                  <ul className={styles.list}>
                    <li>Increases transparency and control</li>
                    <li>Mimics how tools like GitHub Copilot and ChatGPT let users feel more involved</li>
                  </ul>
                </div>
                <div className={styles.solutionMetrics}>
                  <strong>Metrics to track:</strong>
                  <ul className={styles.list}>
                    <li>Reduction in AI output abandonment</li>
                    <li>Increase in &apos;output edited and used&apos; rate</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionHeader}>
                <div className={styles.solutionNumber}>03</div>
                <div className={styles.solutionPriority}>Medium Priority | Medium Impact</div>
              </div>
              <h3 className={styles.solutionTitle}>Mini AI Editor Mode</h3>
              <div className={styles.solutionContent}>
                <p className={styles.solutionDescription}>
                  Instead of just rewriting, offer an optional GrammarlyGO side editor.
                </p>
                <div className={styles.solutionImplementation}>
                  <strong>Implementation:</strong>
                  <ul className={styles.list}>
                    <li>Users can write a rough draft, toggle a GrammarlyGO editor view</li>
                    <li>See enhanced versions or paragraph-level suggestions</li>
                  </ul>
                </div>
                <div className={styles.solutionWhy}>
                  <strong>Why it&apos;s better:</strong>
                  <ul className={styles.list}>
                    <li>Gives GrammarlyGO a defined space rather than injecting into main editor</li>
                    <li>Helps with long-form content where users want help structuring or revising</li>
                  </ul>
                </div>
                <div className={styles.solutionMetrics}>
                  <strong>Metrics to track:</strong>
                  <ul className={styles.list}>
                    <li>Session length with AI Editor open</li>
                    <li>Feature satisfaction score</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionHeader}>
                <div className={styles.solutionNumber}>04</div>
                <div className={styles.solutionPriority}>Medium Priority | High Impact</div>
              </div>
              <h3 className={styles.solutionTitle}>Start with AI Smart Templates</h3>
              <div className={styles.solutionContent}>
                <p className={styles.solutionDescription}>
                  Offer AI-first document templates for common use cases.
                </p>
                <div className={styles.solutionImplementation}>
                  <strong>Implementation:</strong>
                  <ul className={styles.list}>
                    <li>Email, outreach, follow-up, project summary templates</li>
                    <li>Prompted with a short form like: Who is this for? What&apos;s your message?</li>
                  </ul>
                </div>
                <div className={styles.solutionWhy}>
                  <strong>Why it&apos;s better:</strong>
                  <ul className={styles.list}>
                    <li>Helps users generate from a blank page, the hardest moment</li>
                    <li>Tailors output based on input, which avoids generic results</li>
                  </ul>
                </div>
                <div className={styles.solutionMetrics}>
                  <strong>Metrics to track:</strong>
                  <ul className={styles.list}>
                    <li>Conversion rate from template to completed doc</li>
                    <li>GrammarlyGO usage rate for new users</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>REPRIORITIZED SOLUTIONS</h2>
            <div className={styles.reprioritizedTable}>
              <div className={styles.reprioritizedHeader}>
                <div className={styles.reprioritizedCell}>Opportunity</div>
                <div className={styles.reprioritizedCell}>Priority</div>
                <div className={styles.reprioritizedCell}>Impact</div>
                <div className={styles.reprioritizedCell}>Justification</div>
              </div>
              <div className={styles.reprioritizedRow}>
                <div className={styles.reprioritizedCell}>Contextual GrammarlyGO Trigger</div>
                <div className={styles.reprioritizedCell}>High</div>
                <div className={styles.reprioritizedCell}>High</div>
                <div className={styles.reprioritizedCell}>Activated during real need. Minimal friction.</div>
              </div>
              <div className={styles.reprioritizedRow}>
                <div className={styles.reprioritizedCell}>Live Preview Panel</div>
                <div className={styles.reprioritizedCell}>High</div>
                <div className={styles.reprioritizedCell}>High</div>
                <div className={styles.reprioritizedCell}>Builds trust, improves perceived quality.</div>
              </div>
              <div className={styles.reprioritizedRow}>
                <div className={styles.reprioritizedCell}>Mini AI Editor</div>
                <div className={styles.reprioritizedCell}>Medium</div>
                <div className={styles.reprioritizedCell}>Medium</div>
                <div className={styles.reprioritizedCell}>Encourages use in complex workflows.</div>
              </div>
              <div className={styles.reprioritizedRow}>
                <div className={styles.reprioritizedCell}>AI Smart Templates</div>
                <div className={styles.reprioritizedCell}>Medium</div>
                <div className={styles.reprioritizedCell}>High</div>
                <div className={styles.reprioritizedCell}>Solves blank page problem. First-week adoption driver.</div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EXPECTED OUTCOMES</h2>
            <div className={styles.outcomesGrid}>
              <div className={styles.outcomeCard}>
                <div className={styles.outcomeValue}>25%</div>
                <div className={styles.outcomeLabel}>Retention Improvement within 6 months</div>
              </div>
              <div className={styles.outcomeCard}>
                <div className={styles.outcomeValue}>40%</div>
                <div className={styles.outcomeLabel}>AI Usage Increase per active user</div>
              </div>
              <div className={styles.outcomeCard}>
                <div className={styles.outcomeValue}>60%</div>
                <div className={styles.outcomeLabel}>User Confusion Reduction clearer value prop</div>
              </div>
            </div>
            <div className={styles.businessImpact}>
              <h3 className={styles.businessImpactTitle}>Business Impact</h3>
              <p className={styles.businessImpactText}>
                At scale, if we can reduce the 60% disengagement rate by even half, Grammarly could recover millions in potential long-term value while building a more competitive AI product that users actually want to use.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
