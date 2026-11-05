import { ActionLink, Eyebrow, PageBreadcrumb } from "../components/SiteShell.jsx";

const learningTracks = [
  {
    number: "01",
    category: "ENGINEERING FOUNDATIONS",
    title: "Stronger fundamentals.",
    description: "Keep developing problem-solving skills while learning how to structure maintainable software.",
    topics: ["Data structures", "Algorithms", "Java", "Backend engineering", "Software design"]
  },
  {
    number: "02",
    category: "AI & LANGUAGE MODELS",
    title: "Understand the system.",
    description: "Explore how AI applications work beneath the interface, and how to reason about their limitations.",
    topics: ["Machine learning", "LLM applications", "Agentic AI", "Tool use", "Evaluation & guardrails"]
  },
  {
    number: "03",
    category: "RETRIEVAL & INTEGRATION",
    title: "Connect ideas to information.",
    description: "Learn how applications bring together knowledge sources, APIs, backend services, and useful user experiences.",
    topics: ["RAG architectures", "Information retrieval", "REST APIs", "Database design", "Full-stack development"]
  },
  {
    number: "04",
    category: "LEARNING IN PUBLIC",
    title: "Practice, share, iterate.",
    description: "Continue solving problems, exploring open source, and learning from the real constraints of personal projects.",
    topics: ["Open source", "Coding practice", "Project iteration", "Honest evaluation", "Continuous learning"]
  }
];

function LearningTrack({ number, category, title, description, topics }) {
  return (
    <article className="learning-track">
      <span className="learning-track-number">{number}</span>
      <div className="learning-track-copy">
        <Eyebrow>{category}</Eyebrow>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="skill-tags">{topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
      </div>
      <span className="learning-track-mark" aria-hidden="true">↗</span>
    </article>
  );
}

export default function Learning() {
  return (
    <main id="main" className="page-shell inner-page">
      <PageBreadcrumb label="LEARNING" />
      <section className="learning-page-heading">
        <Eyebrow dot>LEARNING IN PROGRESS · NOT EXPERTISE CLAIMS</Eyebrow>
        <h1>Curious about how<br />the <span className="serif-italic">whole thing works.</span></h1>
        <p>I want to understand the engineering behind useful software and AI—not just connect an API and call it a product. These are the directions I’m exploring as I build my foundations.</p>
      </section>

      <section className="learning-tracks" aria-label="Learning areas">
        {learningTracks.map((track) => <LearningTrack key={track.number} {...track} />)}
      </section>

      <section className="learning-principle">
        <Eyebrow>HOW I APPROACH LEARNING</Eyebrow>
        <p>Start with fundamentals. Build something real. Find the gaps. <span>Repeat.</span></p>
      </section>

      <section className="learning-page-footer">
        <p className="eyebrow">MY CURRENT PROJECTS GIVE ME PLACES TO PRACTICE</p>
        <ActionLink href="projects.html" className="button-dark">Explore the projects</ActionLink>
      </section>
    </main>
  );
}
