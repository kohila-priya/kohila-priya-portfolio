import { useState } from "react";
import { Eyebrow, ExternalLink, PageBreadcrumb } from "../components/SiteShell.jsx";

const contactEmail = "kohilaaa4@gmail.com";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const subject = `[Portfolio] ${values.get("subject")} — ${values.get("name")}`;
    const body = [
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      "",
      String(values.get("message"))
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormStatus("Your email app will open with your message ready to send. Nothing is stored on this site.");
    window.location.href = mailto;
  }

  return (
    <main id="main" className="page-shell inner-page">
      <PageBreadcrumb label="CONTACT" />
      <section className="contact-layout">
        <div className="contact-copy">
          <Eyebrow dot>OPEN TO LEARNING & COLLABORATION</Eyebrow>
          <h1>Let’s start<br />with <span className="serif-italic">a good question.</span></h1>
          <p className="contact-lead">I’m a computer science student interested in software engineering, full-stack systems, and applied AI. If that overlaps with what you’re building or learning, I’d be glad to connect.</p>
          <div className="contact-aside">
            <span className="aside-icon" aria-hidden="true">@</span>
            <div>
              <p>Email me directly</p>
              <a href={`mailto:${contactEmail}`}>{contactEmail} <span aria-hidden="true">↗</span></a>
              <small>Or use the message form and send from your email app.</small>
            </div>
          </div>
          <div className="contact-aside">
            <span className="aside-icon" aria-hidden="true">↗</span>
            <div>
              <p>Find me on GitHub</p>
              <ExternalLink href="https://github.com/kohila-priya">github.com/kohila-priya <span aria-hidden="true">↗</span></ExternalLink>
              <small>My public projects and DSA practice are linked from there.</small>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="eyebrow">SEND A MESSAGE</p>
          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="What should I call you?" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-subject">What’s this about?</label>
            <select id="contact-subject" name="subject" defaultValue="" required>
              <option value="" disabled>Choose a topic</option>
              <option>Project collaboration</option>
              <option>Software engineering</option>
              <option>AI and machine learning</option>
              <option>Just saying hello</option>
              <option>Something else</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Your message</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="Tell me a little about it..." required />
          </div>
          <button className="button button-dark form-submit" type="submit">Open email to send <span aria-hidden="true">↗</span></button>
          <p className="form-note" role="status">{formStatus || "The form opens your email app with the message filled in; it does not send or store anything by itself."}</p>
        </form>
      </section>
      <section className="contact-bottom">
        <Eyebrow>WHAT I’M HAPPY TO TALK ABOUT</Eyebrow>
        <div className="interest-list"><span>Software engineering</span><span>Full-stack projects</span><span>AI & LLM applications</span><span>Learning together</span></div>
      </section>
    </main>
  );
}
