import "./portfolio.css";
import { SiteFooter, SiteHeader } from "./components/SiteShell.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Internship from "./pages/Internship.jsx";
import Learning from "./pages/Learning.jsx";
import Projects from "./pages/Projects.jsx";

const pages = { home: Home, about: About, internship: Internship, learning: Learning, projects: Projects, contact: Contact };

export default function App({ page }) {
  const Page = pages[page];

  if (!Page) {
    throw new Error(`Unknown portfolio page: ${page}`);
  }

  return (
    <>
      <SiteHeader page={page} />
      <Page />
      <SiteFooter />
    </>
  );
}
