import React from "react";
import "../css/presentation-card.scss";

export default function PresentationCard({ content }) {
  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    event.currentTarget.style.setProperty("--card-rotate-x", `${(0.5 - y) * 4}deg`);
    event.currentTarget.style.setProperty("--card-rotate-y", `${(x - 0.5) * 4}deg`);
    event.currentTarget.style.setProperty("--card-glow-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--card-glow-y", `${y * 100}%`);
  };

  const resetPointerPosition = (event) => {
    event.currentTarget.style.setProperty("--card-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--card-rotate-y", "0deg");
  };

  return (
    <div
      className="portrait-console"
      data-reveal
      style={{ "--reveal-delay": "80ms" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointerPosition}
    >
      <div className="console-topbar">
        <div className="console-dots" aria-hidden="true"><span /><span /><span /></div>
        <code>{content.file}</code>
        <span>{content.title}</span>
      </div>

      <div className="portrait-feed">
        <img
          src="/profile-image.jpeg"
          alt="Bruno Vincenzi"
          className="profile-img"
          width="507"
          height="507"
        />
        <span className="feed-label feed-label-bottom">{content.caption}</span>
      </div>

      <dl className="telemetry">
        {content.fields.map(([term, description]) => (
          <div key={term}><dt>{term}</dt><dd>{description}</dd></div>
        ))}
      </dl>
    </div>
  );
}
