import { useEffect, useState } from "react";

const terminalContent = {
  it: {
    mode: "profilo interattivo",
    initial: { command: "open profile", output: "Profilo interattivo pronto. Seleziona un comando." },
    placeholder: "scrivi un comando…",
    run: "esegui ↵",
    quickLabel: "Comandi rapidi",
    quickCommands: ["profilo", "competenze", "contatti"],
    responses: {
      help: "comandi: profilo | competenze | contatti | clear",
      profilo: "Bruno Vincenzi — Firmware Developer in Edalab e studente magistrale in Computer Engineering.",
      whoami: "Bruno Vincenzi — Firmware Developer in Edalab e studente magistrale in Computer Engineering.",
      competenze: "Embedded: C, firmware, microcontrollori. Web: React, Next.js, JavaScript e GraphQL.",
      stack: "Embedded: C, firmware, microcontrollori. Web: React, Next.js, JavaScript e GraphQL.",
      contatti: "Email: vincenzibruno3107@gmail.com",
      contact: "Email: vincenzibruno3107@gmail.com",
    },
    error: (command) => `Comando non riconosciuto: ${command}. Digita 'help'.`,
  },
  en: {
    mode: "interactive profile",
    initial: { command: "open profile", output: "Interactive profile ready. Select a command." },
    placeholder: "enter a command…",
    run: "run ↵",
    quickLabel: "Quick commands",
    quickCommands: ["profile", "skills", "contact"],
    responses: {
      help: "commands: profile | skills | contact | clear",
      profile: "Bruno Vincenzi — Firmware Developer at Edalab and Computer Engineering master's student.",
      whoami: "Bruno Vincenzi — Firmware Developer at Edalab and Computer Engineering master's student.",
      skills: "Embedded: C, firmware, microcontrollers. Web: React, Next.js, JavaScript, and GraphQL.",
      stack: "Embedded: C, firmware, microcontrollers. Web: React, Next.js, JavaScript, and GraphQL.",
      contact: "Email: vincenzibruno3107@gmail.com",
    },
    error: (command) => `Unknown command: ${command}. Type 'help'.`,
  },
};

export default function CommandTerminal({ language }) {
  const copy = terminalContent[language];
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([copy.initial]);

  useEffect(() => {
    setCommand("");
    setHistory([terminalContent[language].initial]);
  }, [language]);

  const execute = (value) => {
    const normalized = value.trim().toLowerCase();
    if (!normalized) return;

    if (normalized === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    setHistory((current) => [
      ...current.slice(-2),
      {
        command: normalized,
        output: copy.responses[normalized] || copy.error(normalized),
      },
    ]);
    setCommand("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    execute(command);
  };

  return (
    <div className="command-terminal">
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true"><span /><span /><span /></div>
        <code>portfolio.console</code>
        <span className="terminal-mode">{copy.mode}</span>
      </div>

      <div className="terminal-body" aria-live="polite">
        <div className="terminal-history">
          {history.map((entry, index) => (
            <div className="terminal-entry" key={`${entry.command}-${index}`}>
              <p><span>portfolio &gt;</span> {entry.command}</p>
              <output>{entry.output}</output>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="terminal-command">portfolio &gt;</label>
          <input
            id="terminal-command"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder={copy.placeholder}
            autoComplete="off"
            spellCheck="false"
          />
          <button type="submit">{copy.run}</button>
        </form>

        <div className="quick-commands" aria-label={copy.quickLabel}>
          {copy.quickCommands.map((item) => (
            <button type="button" key={item} onClick={() => execute(item)}>{item}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
