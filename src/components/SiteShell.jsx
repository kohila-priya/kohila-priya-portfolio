import { useEffect, useState } from "react";

const navigation = [
  { href: "index.html", label: "Home", page: "home" },
  { href: "about.html", label: "About", page: "about" },
  { href: "internship.html", label: "Internship", page: "internship" },
  { href: "learning.html", label: "Learning", page: "learning" },
  { href: "projects.html", label: "Projects", page: "projects" },
  { href: "contact.html", label: "Contact", page: "contact" }
];

export function Eyebrow({ children, dot = false }) {
  return <p className="eyebrow">{dot && <span className="status-dot" />} {children}</p>;
}

export function ActionLink({ href, children, className = "" }) {
  const isExternal = href.startsWith("https://");

  return (
    <a className={`button ${className}`.trim()} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export function SiteHeader({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("portfolio-theme") === "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  function toggleTheme() {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    if (nextIsDark) {
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      localStorage.removeItem("portfolio-theme");
    }
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="index.html" aria-label="Kohila Priya home">kp<span>.</span></a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>
      <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            href={item.href}
            aria-current={page === item.page ? "page" : undefined}
            key={item.page}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="contact.html" onClick={() => setMenuOpen(false)}>
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        title="Toggle color theme"
        onClick={toggleTheme}
      >
        <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
        <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.1A8.6 8.6 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z" /></svg>
      </button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="wordmark" href="index.html">kp<span>.</span></a>
        <p>Curious by design. Built with care. © <span>{new Date().getFullYear()}</span> Kohila Priya</p>
        <a className="back-top" href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}

export function PageBreadcrumb({ label }) {
  return (
    <div className="page-eyebrow">
      <a href="index.html">HOME</a><span>/</span><span>{label}</span>
    </div>
  );
}

export function ExternalLink({ href, children, className = "" }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}
