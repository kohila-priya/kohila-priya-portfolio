import { ActionLink, Eyebrow, ExternalLink, PageBreadcrumb } from "../components/SiteShell.jsx";

const internshipInterests = [
  {
    label: "Software engineering",
    description: "Core programming, problem-solving, backend development, and building reliable software."
  },
  {
    label: "Full-stack development",
    description: "Connecting React interfaces with APIs, server-side logic, and persistent data."
  },
  {
    label: "Applied AI",
    description: "Learning how AI and LLM-powered features fit into useful, carefully engineered products."
  }
];

const proofPoints = [
  { number: "01", name: "MealLens", detail: "AI-assisted nutrition project · Active development", href: "projects.html#meallens" },
  { number: "02", name: "PRIORA", detail: "AI-powered planning project · Active development", href: "projects.html#priora" },
  { number: "03", name: "Coding practice", detail: "Multiple coding and competitive-programming profiles", href: "about.html" }
];

function InterestCard({ label, description }) {
  return (
    <article className="internship-interest">
      <span className="internship-interest-mark" aria-hidden="true">✳</span>
      <h3>{label}</h3>
      <p>{description}</p>
    </article>
  );
}

function ProofLink({ number, name, detail, href }) {
  return (
    <a className="internship-proof-link" href={href}>
      <span className="internship-proof-number">{number}</span>
      <span className="internship-proof-copy"><strong>{name}</strong><small>{detail}</small></span>
      <span className="internship-proof-arrow" aria-hidden="true">↗</span>
    </a>
  );
}

export default function Internship() {
  return (
    <main id="main" className="page-shell inner-page">
      <PageBreadcrumb label="INTERNSHIP" />
      <section className="internship-hero">
        <div className="internship-hero-copy">
          <Eyebrow dot>INTERNSHIP PROFILE · COMPUTER SCIENCE</Eyebrow>
          <h1>Ready to learn by <span className="serif-italic">building.</span></h1>
          <p>I’m Kohila Priya, a second-year Computer Science and Engineering student graduating in 2029. I’m interested in internship opportunities where I can learn from real engineering work, contribute thoughtfully, and build stronger software fundamentals.</p>
          <div className="internship-hero-actions">
            <ActionLink href="mailto:kohilaaa4@gmail.com?subject=Internship%20opportunity" className="button-dark">Email about an opportunity</ActionLink>
            <ExternalLink className="text-link" href="https://github.com/kohila-priya">View my GitHub <span aria-hidden="true">↗</span></ExternalLink>
          </div>
          <p className="internship-honesty-note">My student projects are presented separately from my completed internship experience.</p>
        </div>
      </section>

      <section className="internship-experience">
        <div className="internship-section-heading">
          <Eyebrow>INTERNSHIP EXPERIENCE</Eyebrow>
          <h2>General Internship at <span className="serif-italic">AK Infopark.</span></h2>
        </div>
        <article className="internship-record">
          <div className="internship-record-heading">
            <div>
              <p className="eyebrow">25CS408 · GENERAL INTERNSHIP</p>
              <h3>AK Infopark Private Limited</h3>
              <p>IT / Software / Technology Company</p>
            </div>
            <span className="verification-status"><span className="status-dot" />COMPLETED</span>
          </div>
          <dl className="internship-record-grid">
            <div><dt>Internship session</dt><dd>EVEN 2025–26 Semester Vacation</dd></div>
            <div><dt>Duration</dt><dd>11–25 June 2026 · 15 days</dd></div>
            <div><dt>Mode</dt><dd>Remote</dd></div>
            <div><dt>Location</dt><dd>Parvathipuram, Nagercoil</dd></div>
            <div><dt>District / state</dt><dd>Kanyakumari, Tamil Nadu</dd></div>
            <div><dt>Stipend</dt><dd>Unpaid</dd></div>
            <div><dt>Milestones</dt><dd>5 listed · 0 check-ins</dd></div>
            <div><dt>Record submitted</dt><dd>19 June 2026</dd></div>
          </dl>
        </article>
      </section>

      <section className="internship-section">
        <div className="internship-section-heading"><Eyebrow>AREAS I’M EXCITED TO EXPLORE</Eyebrow><h2>Bring on the <span className="serif-italic">real problems.</span></h2></div>
        <div className="internship-interest-grid">{internshipInterests.map((interest) => <InterestCard key={interest.label} {...interest} />)}</div>
      </section>

      <section className="internship-proof-section">
        <div className="internship-section-heading"><Eyebrow>THINGS I’M BUILDING & PRACTISING</Eyebrow><h2>Work in <span className="serif-italic">progress.</span></h2><p>These are learning projects, not claims of professional or production experience.</p></div>
        <div className="internship-proof-list">{proofPoints.map((proof) => <ProofLink key={proof.number} {...proof} />)}</div>
      </section>

      <section className="internship-contact">
        <div><Eyebrow>LET’S CONNECT</Eyebrow><h2>Curiosity, effort,<br /><span className="serif-italic">and a good next step.</span></h2></div>
        <div className="internship-contact-actions"><a className="internship-email" href="mailto:kohilaaa4@gmail.com">kohilaaa4@gmail.com <span aria-hidden="true">↗</span></a><ActionLink href="contact.html" className="button-dark">Contact me</ActionLink></div>
      </section>
    </main>
  );
}
