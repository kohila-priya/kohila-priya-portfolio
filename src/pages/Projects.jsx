import { useState } from "react";
import { ActionLink, Eyebrow, ExternalLink, PageBreadcrumb } from "../components/SiteShell.jsx";
import mealLensAnalysis from "../assets/meallens-analysis.png";
import mealLensHome from "../assets/meallens-home.png";

const projects = [
  { id: "meallens", category: "nutrition", number: "01", eyebrow: "COMPUTER VISION · FULL-STACK", name: "MealLens", lead: "An AI-assisted food and nutrition application exploring how an image can become a structured, reviewable meal estimate.", repository: "https://github.com/kohila-priya/MealLens" },
  { id: "priora", category: "planning", number: "02", eyebrow: "AI PLANNING · FULL-STACK", name: "PRIORA", lead: "An AI-driven academic planner designed to turn natural-language tasks into prioritized, time-aware plans.", repository: "https://github.com/kohila-priya/Priora" }
];

function ProjectStatus() {
  return <span className="status-label"><span className="status-dot" /> ACTIVE DEVELOPMENT</span>;
}

function TechnologyTags({ children }) {
  return <div className="tag-row">{children.map((technology) => <span key={technology}>{technology}</span>)}</div>;
}

function MealLensProject() {
  return (
    <article className="project-detail" id="meallens" data-category="nutrition">
      <div className="project-detail-heading"><div><Eyebrow>01 / COMPUTER VISION · FULL-STACK</Eyebrow><h2>MealLens</h2><p className="project-lead">{projects[0].lead}</p></div><ProjectStatus /></div>
      <figure className="project-screenshot"><img src={mealLensAnalysis} alt="Screenshot from MealLens showing its food-image analysis interface and estimated nutrition panel" loading="lazy" /><figcaption>Actual project screenshot. Nutrition figures shown are estimates from the app and are not independently validated.</figcaption></figure>
      <div className="project-detail-body">
        <div className="project-story"><h3>The problem</h3><p>Keeping a meal log can mean manually searching foods and entering nutrition details. MealLens explores whether image-assisted recognition can make the first step more approachable.</p><h3>Designed analysis flow</h3><p>Upload a food image; use AI to identify visible foods and estimate portions; query USDA FoodData Central for nutrition matches; scale and review estimated values; then store the meal for history and dashboard views.</p><p className="integrity-note">The complete image-to-nutrition pipeline, matching quality, portion estimates, and end-to-end behavior are still being verified. Values are estimates, not dietary or medical advice.</p></div>
        <div className="project-build"><h3>Implementation notes</h3><ul><li>React and Vite frontend with dashboard, profile, history, insights, and analysis areas.</li><li>Flask REST API and a Python backend for application workflows.</li><li>Gemini API for AI-assisted image analysis and USDA FoodData Central as a nutrition-data source.</li><li>SQLite and SQLAlchemy for project data persistence.</li><li>Axios for frontend API requests.</li></ul><TechnologyTags>{["React", "Vite", "Tailwind CSS", "Python", "Flask", "SQLite", "SQLAlchemy", "Gemini", "USDA API"]}</TechnologyTags></div>
      </div>
      <div className="screenshot-gallery"><figure><img src={mealLensHome} alt="MealLens home page screenshot from the actual application" loading="lazy" /><figcaption>Application landing page</figcaption></figure></div>
      <div className="project-links"><ActionLink href={projects[0].repository} className="button-dark">View repository</ActionLink><span>No live demo is being claimed.</span></div>
    </article>
  );
}

function PriorAArtwork() {
  return (
    <div className="priora-project-visual"><span className="image-label">CURRENT PROJECT DIRECTION · NOT A PRODUCT SCREENSHOT</span><div className="priora-flow"><div className="flow-node">NATURAL-LANGUAGE TASKS<small>DEADLINES · PRIORITY · EFFORT</small></div><span className="flow-arrow" aria-hidden="true">→</span><div className="flow-node flow-ai">HUGGING FACE MODEL<small>INTERPRET · DECIDE · PLAN</small></div><span className="flow-arrow" aria-hidden="true">→</span><div className="flow-node">REVIEWABLE DAY PLAN<small>SCHEDULED · STILL PENDING</small></div></div></div>
  );
}

function PriorAProject() {
  return (
    <article className="project-detail" id="priora" data-category="planning">
      <div className="project-detail-heading"><div><Eyebrow>02 / AI PLANNING · FULL-STACK</Eyebrow><h2>PRIORA</h2><p className="project-lead">{projects[1].lead}</p></div><ProjectStatus /></div>
      <PriorAArtwork />
      <div className="project-detail-body">
        <div className="project-story"><h3>The problem</h3><p>A task list tells students what remains to be done, but not what deserves focus first or how it fits into the available day. PRIORA explores planning around deadlines, urgency, effort, and study time.</p><h3>How it is being built</h3><p>Task text is sent to backend AI endpoints for parsing and day planning. The AI is intended to make the planning decisions; backend checks and limits should keep generated plans within task and daily-capacity constraints.</p><p className="integrity-note">The repository contains task-parsing and planning endpoints, a Hugging Face model connection, and validation logic. End-to-end AI behavior, provider availability, and the complete planning workflow are still being verified; the project is not production-ready.</p><p className="integrity-note">A local scheduling fallback also exists for provider failures, so fallback plans are not always model-generated. This behavior is being reviewed alongside the end-to-end AI flow.</p></div>
        <div className="project-build"><h3>Implementation notes</h3><ul><li>React, Vite, Tailwind CSS, and FullCalendar in the frontend.</li><li>Python Flask backend with separate task parsing and day-planning endpoints.</li><li>Hugging Face inference through an OpenAI-compatible client.</li><li>Local storage for task and session persistence in the current client.</li><li>Backend input validation and plan-capacity checks; provider availability and fallback behavior affect the experience.</li></ul><TechnologyTags>{["React", "Vite", "Tailwind CSS", "JavaScript", "Flask", "Hugging Face", "FullCalendar", "Local storage"]}</TechnologyTags></div>
      </div>
      <div className="project-links"><ActionLink href={projects[1].repository} className="button-dark">View repository</ActionLink><span>No live demo is being claimed.</span></div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filters = [{ id: "all", label: "All projects", count: "02" }, { id: "nutrition", label: "Nutrition & AI" }, { id: "planning", label: "Planning & AI" }];

  return (
    <main id="main" className="page-shell inner-page">
      <PageBreadcrumb label="PROJECTS" />
      <section className="work-heading"><Eyebrow>REAL PROJECTS · HONEST PROGRESS</Eyebrow><h1>Building, then <span className="serif-italic">learning.</span></h1><p>Two full-stack explorations in applied AI. Both are actively developing; neither is presented as production-ready.</p></section>
      <div className="filter-row" role="group" aria-label="Filter projects">{filters.map((item) => <button className={`filter-button${filter === item.id ? " is-active" : ""}`} type="button" data-filter={item.id} aria-pressed={filter === item.id} key={item.id} onClick={() => setFilter(item.id)}>{item.label}{item.count && <span>{item.count}</span>}</button>)}</div>
      <div className="project-detail-list">{(filter === "all" || filter === "nutrition") && <MealLensProject />}{(filter === "all" || filter === "planning") && <PriorAProject />}</div>
      <section className="work-end"><Eyebrow>BUILDING IN PUBLIC, LEARNING AS I GO</Eyebrow><h2>Follow along on <span className="serif-italic">GitHub.</span></h2><ExternalLink className="button button-dark" href="https://github.com/kohila-priya">Visit my GitHub <span aria-hidden="true">↗</span></ExternalLink></section>
    </main>
  );
}
