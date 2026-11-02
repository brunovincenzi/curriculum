import { useEffect, useRef, useState } from "react";
import "./App.css";
import CommandTerminal from "./components/CommandTerminal";
import HistorySection from "./components/HistorySection";
import PresentationCard from "./components/PresentationCard";
import { portfolioContent } from "./content";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

const EMAIL = "vincenzibruno3107@gmail.com";
const SECTION_PROGRESS = {
  profilo: 0.24,
  percorso: 0.5,
  competenze: 0.76,
  contatti: 0.96,
};

function App() {
  const [language, setLanguage] = useState("it");
  const [activeSection, setActiveSection] = useState(() => {
    const section = window.location.hash.slice(1);
    return SECTION_PROGRESS[section] ? section : "";
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const copyFeedbackTimer = useRef(null);
  const content = portfolioContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    setEmailCopied(false);
  }, [language]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      if (window.scrollY < Math.min(window.innerHeight * 0.45, 420)) {
        setActiveSection("");
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const syncWithHash = () => {
      const section = window.location.hash.slice(1);
      if (SECTION_PROGRESS[section]) {
        setActiveSection(section);
        setScrollProgress(SECTION_PROGRESS[section]);
      } else if (!section || section === "top") {
        setActiveSection("");
        setScrollProgress(0);
      }
    };

    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const sections = document.querySelectorAll("main section[id]");
    document.documentElement.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("motion-ready");
    }

    const revealObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    const sectionObserver = new window.IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-18% 0px -68%", threshold: 0 },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  useEffect(() => () => window.clearTimeout(copyFeedbackTimer.current), []);

  const handleHeroPointerMove = (event) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const field = document.createElement("textarea");
        field.value = EMAIL;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        document.body.removeChild(field);
      }

      setEmailCopied(true);
      window.clearTimeout(copyFeedbackTimer.current);
      copyFeedbackTimer.current = window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <div className="site-shell" lang={language}>
      <header className="site-header">
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress * 100}%` }}
          aria-hidden="true"
        />
        <a
          className="brand-mark"
          href="#top"
          onClick={() => {
            setActiveSection("");
            setScrollProgress(0);
          }}
          aria-label={language === "it" ? "Bruno Vincenzi, torna all'inizio" : "Bruno Vincenzi, back to top"}
        >
          <span aria-hidden="true">&lt;</span>Bruno.V<span aria-hidden="true">/&gt;</span>
        </a>

        <nav
          className="site-nav"
          aria-label={language === "it" ? "Navigazione principale" : "Main navigation"}
        >
          <a href="#profilo" onClick={() => { setActiveSection("profilo"); setScrollProgress(SECTION_PROGRESS.profilo); }} aria-current={activeSection === "profilo" ? "page" : undefined}>{content.nav.profile}</a>
          <a href="#percorso" onClick={() => { setActiveSection("percorso"); setScrollProgress(SECTION_PROGRESS.percorso); }} aria-current={activeSection === "percorso" ? "page" : undefined}>{content.nav.experience}</a>
          <a href="#competenze" onClick={() => { setActiveSection("competenze"); setScrollProgress(SECTION_PROGRESS.competenze); }} aria-current={activeSection === "competenze" ? "page" : undefined}>{content.nav.skills}</a>
          <a href="#contatti" onClick={() => { setActiveSection("contatti"); setScrollProgress(SECTION_PROGRESS.contatti); }} aria-current={activeSection === "contatti" ? "page" : undefined}>{content.nav.contact}</a>
        </nav>

        <div className="header-meta">
          <div className="system-status" aria-label={language === "it" ? "Città in cui opero" : "Cities I work in"}>
            <span aria-hidden="true" />
            {content.location}
          </div>
          <div
            className="language-switcher"
            role="group"
            aria-label={language === "it" ? "Seleziona lingua" : "Select language"}
          >
            {Object.entries(portfolioContent).map(([code, locale]) => (
              <button
                type="button"
                key={code}
                lang={code}
                aria-label={locale.localeName}
                aria-pressed={language === code}
                onClick={() => setLanguage(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title" onPointerMove={handleHeroPointerMove}>
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy" data-reveal>
            <p className="boot-line">
              {content.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              Bruno
              <br />
              <span>Vincenzi</span><i aria-hidden="true">.</i>
            </h1>
            <p className="role-line">
              <span aria-hidden="true">{">"}</span> {content.hero.role}
            </p>
            <p className="hero-intro">{content.hero.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="mailto:vincenzibruno3107@gmail.com">
                {content.hero.primaryAction} <Arrow />
              </a>
              <a className="terminal-link" href="#percorso">
                {content.hero.secondaryAction} <span>↓</span>
              </a>
            </div>
          </div>

          <PresentationCard content={content.profileCard} />

          <div className="hero-terminal" data-reveal style={{ "--reveal-delay": "120ms" }}>
            <CommandTerminal language={language} />
          </div>
        </section>

        <section className="profile-section" id="profilo" aria-labelledby="profile-title">
          <div className="section-command">
            <span>01</span>
            <code>{content.profile.path}</code>
          </div>

          <div className="profile-layout">
            <div className="section-heading" data-reveal>
              <p className="kicker">{content.profile.kicker}</p>
              <h2 id="profile-title">{content.profile.title}</h2>
            </div>

            <div className="profile-copy" data-reveal style={{ "--reveal-delay": "70ms" }}>
              {content.profile.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="code-card" data-reveal style={{ "--reveal-delay": "140ms" }} aria-label={language === "it" ? "Profilo in formato codice" : "Profile as code"}>
              <div className="code-card-bar">
                <span />
                <span />
                <span />
                <code>bruno.config.js</code>
              </div>
              <pre className="code-block"><code>
                <span className="code-line"><span className="syntax-purple">const</span> <span className="syntax-blue">developer</span> = {'{'}</span>
                <span className="code-line code-indent">role: <span className="syntax-green">"{content.profile.code.role}"</span>,</span>
                <span className="code-line code-indent">services: <span className="syntax-green">"{content.profile.code.services}"</span>,</span>
                <span className="code-line code-indent">location: <span className="syntax-green">"{content.profile.code.location}"</span>,</span>
                <span className="code-line code-indent">focus: [<span className="syntax-green">"{content.profile.code.focus[0]}"</span>, <span className="syntax-green">"{content.profile.code.focus[1]}"</span>],</span>
                <span className="code-line code-indent">status: <span className="syntax-orange">"{content.profile.code.status}"</span></span>
                <span className="code-line">{'}'};</span>
              </code></pre>
            </div>

            <dl className="profile-facts" data-reveal>
              {content.profile.facts.map(([term, description]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <HistorySection experience={content.experience} skills={content.skills} />

        <section className="contact-section" id="contatti" aria-labelledby="contact-title">
          <div className="section-command section-command-dark">
            <span>04</span>
            <code>{content.contact.path}</code>
          </div>
          <p className="kicker" data-reveal>{content.contact.kicker}</p>
          <h2 id="contact-title" data-reveal>{content.contact.title}<br /><span>{content.contact.titleAccent}</span></h2>
          <div className="contact-console" data-reveal>
            <div className="contact-prompt">
              <span>{content.contact.prompt}</span>
              <code>{content.contact.channel}</code>
            </div>
            <div className="contact-email-row">
              <a href={`mailto:${EMAIL}`}>
                {EMAIL} <Arrow />
              </a>
              <button type="button" onClick={copyEmail} className={emailCopied ? "is-copied" : ""}>
                <span aria-hidden="true">{emailCopied ? "✓" : "⧉"}</span>
                {emailCopied ? content.contact.copied : content.contact.copy}
              </button>
            </div>
            <p>{content.contact.status}</p>
          </div>
          <div className="contact-links" data-reveal>
            <a href="tel:+393455972890">{content.contact.phone}</a>
            <a
              href="https://www.linkedin.com/in/bruno-vincenzi-1041b8259/"
              target="_blank"
              rel="noreferrer"
            >
              {content.contact.linkedin}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Bruno Vincenzi</p>
        <p>{content.footer.built}</p>
        <a href="#top">{content.footer.top}</a>
      </footer>
    </div>
  );
}

export default App;
