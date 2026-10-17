export default function HistorySection({ experience, skills }) {
  return (
    <>
      <section className="timeline-section" id="percorso" aria-labelledby="timeline-title">
        <div className="section-command">
          <span>02</span>
          <code>{experience.path}</code>
        </div>
        <div className="timeline-intro" data-reveal>
          <div className="section-heading">
            <p className="kicker">{experience.kicker}</p>
            <h2 id="timeline-title">{experience.title}</h2>
          </div>
          <p>{experience.intro}</p>
        </div>

        <div className="timeline-list">
          {experience.experiences.map((item, index) => (
            <article
              className="timeline-item"
              key={item.id}
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <div className="log-meta">
                <code>{item.id}</code>
                <time>{item.period}</time>
              </div>
              <div className="timeline-role">
                <span className={`log-status ${item.status === experience.currentStatus ? "is-running" : ""}`}>
                  {item.status}
                </span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <p className="timeline-description">{item.description}</p>
              <ul className="tag-list" aria-label={`${item.role} skills`}>
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="education-terminal" data-reveal>
          <div className="education-head">
            <span aria-hidden="true">›</span>
            <code>{experience.educationLabel}</code>
            <span>{experience.educationCount}</span>
          </div>
          <div className="education-grid">
            {experience.education.map((item) => (
              <article key={item.id}>
                <code>{item.id}</code><span>{item.status}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section" id="competenze" aria-labelledby="skills-title">
        <div className="section-command section-command-dark">
          <span>03</span>
          <code>{skills.path}</code>
        </div>
        <div className="skills-intro" data-reveal>
          <div className="section-heading">
            <p className="kicker">{skills.kicker}</p>
            <h2 id="skills-title">{skills.title}<span aria-hidden="true">.</span></h2>
          </div>
          <div className="memory-readout" aria-label={skills.title}>
            {skills.readout.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className="skills-grid">
          {skills.cards.map((card, index) => (
            <article
              className="skill-card"
              key={card.title}
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` }}
            >
              <div className="skill-card-head">
                <code>{card.code}</code>
                <span>{card.type}</span>
              </div>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => <li key={item}><span>›</span>{item}</li>)}
              </ul>
              <div className="module-footer"><span aria-hidden="true" /> {skills.cardStatus}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
