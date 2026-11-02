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
      profilo: "Bruno Vincenzi — Sviluppo siti e piattaforme web complete. Opero a Verona e a Gela, con competenze software e firmware embedded.",
      whoami: "Bruno Vincenzi — Sviluppo siti e piattaforme web complete. Opero a Verona e a Gela, con competenze software e firmware embedded.",
      competenze: "Web full-stack: siti, piattaforme, logica applicativa, dati e API REST / GraphQL. Tecnologie: React, Next.js e JavaScript. Embedded: C, firmware e microcontrollori.",
      stack: "Web full-stack: siti, piattaforme, logica applicativa, dati e API REST / GraphQL. Tecnologie: React, Next.js e JavaScript. Embedded: C, firmware e microcontrollori.",
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
      profile: "Bruno Vincenzi — I build complete websites and web platforms. I work in both Verona and Gela, with experience in software and embedded firmware development.",
      whoami: "Bruno Vincenzi — I build complete websites and web platforms. I work in both Verona and Gela, with experience in software and embedded firmware development.",
      skills: "Full-stack web: websites, platforms, application logic, data, and REST / GraphQL APIs. Technologies: React, Next.js, and JavaScript. Embedded: C, firmware, and microcontrollers.",
      stack: "Full-stack web: websites, platforms, application logic, data, and REST / GraphQL APIs. Technologies: React, Next.js, and JavaScript. Embedded: C, firmware, and microcontrollers.",
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
