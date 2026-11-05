import { Eyebrow, PageBreadcrumb } from "../components/SiteShell.jsx";

const codingProfiles = [
  {
    title: "Coding practice",
    profiles: [
      { name: "LeetCode", id: "kohila_priya", href: "https://leetcode.com/u/kohila_priya/" },
      { name: "CodeChef", id: "kohila_priya", href: "https://www.codechef.com/users/kohila_priya" },
      { name: "HackerRank", id: "kohilaaa4", href: "https://www.hackerrank.com/profile/kohilaaa4" },
      { name: "GeeksforGeeks", id: "kohilapriya", href: "https://www.geeksforgeeks.org/user/kohilapriya/" },
      { name: "SkillRack", id: "25cse160@stjosephsengg" }
    ]
  },
  {
    title: "Competitive coding",
    profiles: [
      { name: "Codeforces", id: "kohilaaa4", href: "https://codeforces.com/profile/kohilaaa4" },
      { name: "HackerEarth", id: "kohilaaa4", href: "https://www.hackerearth.com/@kohilaaa4/" },
      { name: "AtCoder", id: "kohila_priya", href: "https://atcoder.jp/users/kohila_priya" },
      { name: "Topcoder", id: "kohila_priya", href: "https://www.topcoder.com/members/kohila_priya" }
    ]
  },
  {
    title: "More profiles",
    profiles: [
      { name: "Kaggle", id: "kohilapriya", href: "https://www.kaggle.com/kohilapriya" },
      { name: "Devfolio", id: "kohila_priya", href: "https://devfolio.co/@kohila_priya" }
    ]
  }
];

const skills = [
  { index: "01", name: "Programming", items: ["Java", "Python", "JavaScript"] },
  { index: "02", name: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS", "Vite"] },
  { index: "03", name: "Backend & APIs", items: ["Flask", "REST APIs", "Axios"] },
  { index: "04", name: "Data & persistence", items: ["SQLite", "SQLAlchemy", "Local storage"] },
  { index: "05", name: "AI exploration", items: ["Gemini API", "Hugging Face", "LLMs", "RAG", "Agentic AI"] },
  { index: "06", name: "Tools & practice", items: ["Git", "GitHub", "VS Code", "Data structures", "Algorithms"] }
];

function CodingProfile({ name, id, href }) {
  const content = <><span><strong>{name}</strong><small>{id}</small></span>{href && <span aria-hidden="true">↗</span>}</>;

  if (!href) {
    return <div className="profile-link profile-link-static">{content}</div>;
  }

  return <a className="profile-link" href={href} target="_blank" rel="noreferrer">{content}</a>;
}

function SkillGroup({ index, name, items }) {
  return <article className="skill-group"><span className="skill-index">{index}</span><h3>{name}</h3><div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></article>;
}

export default function About() {
  return (
    <main id="main" className="page-shell inner-page">
      <PageBreadcrumb label="ABOUT" />
      <section className="about-hero">
        <div className="about-heading"><Eyebrow dot>A STUDENT, A BUILDER, A WORK IN PROGRESS</Eyebrow><h1>Learning how to build <span className="serif-italic">what matters.</span></h1></div>
        <div className="about-intro">
          <p className="lead">I’m Kohila Priya, a second-year B.E. Computer Science and Engineering student at St. Joseph’s College of Engineering, graduating in 2029.</p>
          <p>I’m drawn to software engineering because it brings rigorous problem-solving together with things people can actually use. My work so far has been hands-on: building full-stack projects, getting familiar with APIs and persistence, and learning how to put the pieces together.</p>
          <p>I’m especially curious about AI and machine learning. I want to understand how LLM-based and agentic systems reason, where they fail, and how to engineer them responsibly—not just put an AI label on an integration.</p>
          <p>I’m early in the journey, and I try to keep that honest. Every project is a place to ask better questions, test my understanding, and strengthen the fundamentals underneath the interface.</p>
        </div>
      </section>

      <section className="education-section"><div><Eyebrow>EDUCATION</Eyebrow><h2>Learning the <span className="serif-italic">fundamentals.</span></h2></div><article className="education-card"><span className="record-mark">SJ</span><div><Eyebrow>EXPECTED GRADUATION · 2029</Eyebrow><h3>St. Joseph’s College of Engineering</h3><p>B.E. Computer Science and Engineering</p><span className="status-label"><span className="status-dot" /> SECOND YEAR</span></div></article></section>

      <section className="skills-section"><div className="section-heading"><div><Eyebrow>TOOLS I’VE WORKED WITH</Eyebrow><h2>Building a <span className="serif-italic">toolkit.</span></h2></div><p className="section-intro">A working toolkit, not a list of mastery claims—still learning with each project.</p></div><div className="skills-grid">{skills.map((skill) => <SkillGroup key={skill.index} {...skill} />)}</div></section>

      <section className="profile-directory">
        <div className="profile-directory-heading"><Eyebrow>CODING & PORTFOLIO PROFILES</Eyebrow><h2>My practice, <span className="serif-italic">across platforms.</span></h2><p>Find my coding practice, competition profiles, and creative work.</p></div>
        <div className="profile-groups">{codingProfiles.map((group) => (
          <section className="profile-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="profile-group-list">{group.profiles.map((profile) => <CodingProfile key={profile.name} {...profile} />)}</div>
          </section>
        ))}</div>
      </section>

    </main>
  );
}
