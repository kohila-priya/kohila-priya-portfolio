import { Eyebrow, ActionLink } from "../components/SiteShell.jsx";

const focusAreas = [
  { index: "01 / FOUNDATIONS", title: "Software engineering", description: "Data structures, algorithms, Java, Python, backend fundamentals, and clean APIs.", glyph: "↗" },
  { index: "02 / INTELLIGENCE", title: "Applied AI", description: "LLMs, AI agents, retrieval-augmented generation, and how to evaluate useful AI systems.", glyph: "✳" },
  { index: "03 / INTEGRATION", title: "Full-stack systems", description: "Connecting responsive interfaces, backend services, APIs, and persistent data.", glyph: "⌘" }
];

function HeroArtwork() {
  return (
    <div className="hero-art" role="img" aria-label="Abstract diagram connecting problem solving, software engineering, and AI">
      <div className="art-grid" />
      <div className="art-ring ring-one" />
      <div className="art-ring ring-two" />
      <div className="art-core"><span>MAKE</span><span>IT USEFUL</span></div>
      <div className="art-node node-one"><b>01</b><span>PROBLEM</span></div>
      <div className="art-node node-two"><b>02</b><span>SYSTEM</span></div>
      <div className="art-node node-three"><b>03</b><span>ITERATE</span></div>
      <span className="art-coordinate">CURIOSITY / IN PROGRESS</span>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main">
      <section className="hero page-shell">
        <div className="hero-copy">
          <Eyebrow dot>COMPUTER SCIENCE · CLASS OF 2029</Eyebrow>
          <h1>Building software with <span className="serif-italic">curiosity</span> and care.</h1>
          <p className="hero-description">I’m Kohila Priya, a second-year Computer Science and Engineering student exploring software development, AI, and how thoughtful ideas become useful applications.</p>
          <div className="hero-actions"><ActionLink href="projects.html" className="button-dark">Explore projects</ActionLink><a className="text-link" href="about.html">More about me <span aria-hidden="true">→</span></a></div>
          <div className="hero-footnote"><span className="note-rule" /> LEARNING BY BUILDING, ONE ITERATION AT A TIME.</div>
        </div>
        <HeroArtwork />
      </section>

      <section className="intro-strip"><div className="page-shell strip-inner"><Eyebrow>MY NORTH STAR</Eyebrow><p>Understand the problem. Build with intention. <span>Keep learning.</span></p></div></section>

      <section className="learning-band"><div className="page-shell learning-inner"><div><Eyebrow>A DIRECTION, NOT A CLAIM</Eyebrow><h2>Still curious.<br /><span className="serif-italic">Still becoming.</span></h2></div><div className="learning-copy"><p>I’m actively exploring the engineering behind AI products—not just their interfaces. The next questions on my list:</p><div className="interest-list"><span>Agentic systems</span><span>LLM applications</span><span>RAG architectures</span><span>Backend design</span><span>Open source</span></div><a className="text-link" href="learning.html">Explore my learning focus <span aria-hidden="true">→</span></a></div><span className="learning-star" aria-hidden="true">✳</span></div></section>

      <section className="page-shell home-contact"><div><Eyebrow>OPEN TO LEARNING & COLLABORATION</Eyebrow><h2>Good conversations<br />make <span className="serif-italic">good starts.</span></h2><p>I’m growing as an engineer and always glad to connect around thoughtful software and AI.</p></div><ActionLink href="contact.html" className="button-dark">Connect with me</ActionLink></section>
    </main>
  );
}
