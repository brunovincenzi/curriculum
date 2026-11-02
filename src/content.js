export const portfolioContent = {
  it: {
    localeName: "Italiano",
    nav: {
      profile: "Profilo",
      experience: "Esperienza",
      skills: "Competenze",
      contact: "Contatti",
    },
    location: "Verona e Gela",
    hero: {
      eyebrow: "Software Developer · Computer Engineering",
      role: "Sviluppo web full-stack · Sistemi embedded",
      intro:
        "Opero sia a Verona sia a Gela e progetto siti web, piattaforme e applicazioni su misura. Seguo l'intero sviluppo, dall'analisi dei requisiti alla messa online, curando interfacce, logica applicativa, gestione dei dati e integrazioni con servizi esterni.",
      primaryAction: "Parliamo del progetto",
      secondaryAction: "Scopri il mio percorso",
    },
    profile: {
      path: "portfolio/about.json",
      kicker: "// profilo professionale",
      title: "Competenze tecniche, visione d'insieme.",
      paragraphs: [
        "Realizzo siti e piattaforme web complete, collegando l'esperienza d'uso alle funzionalità e ai dati che le rendono operative. Parto dalle esigenze del progetto per definire l'architettura, sviluppare le funzionalità e accompagnare la soluzione fino alla pubblicazione.",
        "Unisco la formazione in Informatica all'esperienza nello sviluppo software e firmware embedded. Attualmente frequento la laurea magistrale in Ingegneria Informatica per Sistemi Intelligenti. Affronto ogni progetto con attenzione all'affidabilità, alla manutenzione e alla qualità del codice.",
      ],
      code: {
        role: "Software Developer",
        services: "siti e piattaforme web",
        location: "Verona / Gela, IT",
        focus: ["full-stack web", "embedded C"],
        status: "studente magistrale e sviluppatore software/firmware",
      },
      facts: [
        ["ambiti", "Web full-stack · Embedded"],
        ["formazione", "Computer Engineering"],
        ["lingue", "Italiano · Inglese B2"],
      ],
    },
    profileCard: {
      file: "profile.jpeg",
      title: "Bruno Vincenzi",
      caption: "Sviluppo web · Verona e Gela",
      fields: [
        ["ruolo", "Software Developer"],
        ["operatività", "Verona e Gela"],
        ["formazione", "Computer Engineering"],
      ],
    },
    experience: {
      path: "portfolio/experience.log",
      kicker: "// esperienza",
      title: "Esperienza professionale.",
      intro:
        "Esperienze nello sviluppo di applicazioni web e firmware embedded, con un approccio che collega requisiti, architettura e implementazione.",
      currentStatus: "In corso",
      experiences: [
        {
          id: "LOG_003",
          period: "Oggi",
          role: "Firmware Developer",
          company: "Edalab S.r.l.",
          description:
            "Sviluppo firmware embedded in C, gestione di microcontrollori e progettazione di logiche di controllo a basso livello su ambienti hardware diversificati.",
          tags: ["embedded C", "microcontrollori", "low level"],
          status: "In corso",
        },
        {
          id: "LOG_002",
          period: "Ott—Dic 2023",
          role: "Web Developer · Stage",
          company: "Filosoft S.r.l. · Verona",
          description:
            "Sviluppo di una web application in ambito trading e integrazione dei dati tramite API GraphQL.",
          tags: ["React", "GraphQL", "CSS"],
          status: "Concluso",
        },
        {
          id: "LOG_001",
          period: "Apr—Giu 2023",
          role: "Web Developer · Stage",
          company: "Filosoft S.r.l. · Verona",
          description:
            "Contributo allo sviluppo di una web application per il settore della ristorazione, con attenzione all'usabilità e all'organizzazione delle schermate.",
          tags: ["Next.js", "HTML", "SCSS"],
          status: "Concluso",
        },
      ],
      educationLabel: "education[]",
      educationCount: "3 percorsi",
      education: [
        {
          id: "EDU_03",
          status: "IN CORSO",
          title: "Computer Engineering for Intelligent Systems",
          description: "Laurea magistrale · Università degli Studi di Verona",
        },
        {
          id: "EDU_02",
          status: "COMPLETATA",
          title: "Informatica",
          description: "Laurea triennale · Università degli Studi di Verona",
        },
        {
          id: "EDU_01",
          status: "2016—2021",
          title: "Liceo Linguistico Elio Vittorini",
          description: "Diploma · 92/100 · Gela",
        },
      ],
    },
    skills: {
      path: "portfolio/skills.json",
      kicker: "// competenze",
      title: "Competenze tecniche",
      readout: ["AREE 03", "WEB & EMBEDDED", "AGGIORNATE"],
      cardStatus: "competenza attiva",
      cards: [
        {
          code: "01",
          title: "Embedded systems",
          type: "specializzazione",
          items: ["C", "Firmware", "Microcontrollori", "Logiche di controllo"],
        },
        {
          code: "02",
          title: "Sviluppo web full-stack",
          type: "siti e piattaforme",
          items: [
            "React",
            "Next.js",
            "JavaScript",
            "HTML / CSS / SCSS",
            "Logica applicativa e dati",
            "API REST / GraphQL",
          ],
        },
        {
          code: "03",
          title: "Software & lingue",
          type: "competenze complementari",
          items: ["Java", "JavaFX", "Inglese B2", "Patenti A1 / B"],
        },
      ],
    },
    contact: {
      path: "portfolio/contact.js",
      kicker: "// contatti",
      title: "Parliamo del tuo",
      titleAccent: "prossimo progetto.",
      prompt: "contact.email",
      channel: "canale diretto",
      status:
        "Opero a Verona e a Gela. Parliamo del tuo sito, della tua piattaforma web o della tua applicazione su misura.",
      copy: "Copia email",
      copied: "Copiata",
      phone: "Telefono",
      linkedin: "LinkedIn",
    },
    footer: {
      built: "Progettato e sviluppato con React",
      top: "Torna all'inizio ↑",
    },
  },
  en: {
    localeName: "English",
    nav: {
      profile: "Profile",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    location: "Verona and Gela",
    hero: {
      eyebrow: "Software Developer · Computer Engineering",
      role: "Full-stack web development · Embedded systems",
      intro:
        "I work in both Verona and Gela, designing and building websites, platforms, and custom web applications. I handle the entire development process, from requirements to launch, covering interfaces, application logic, data management, and integrations with external services.",
      primaryAction: "Discuss a project",
      secondaryAction: "Explore my experience",
    },
    profile: {
      path: "portfolio/about.json",
      kicker: "// professional profile",
      title: "Technical expertise, broad perspective.",
      paragraphs: [
        "I build complete websites and web platforms, connecting the user experience with the functionality and data behind it. Starting from the project's needs, I define the architecture, develop the features, and take the solution through to launch.",
        "I combine my Computer Science background with experience in software and embedded firmware development. I am currently pursuing a Master's degree in Computer Engineering for Intelligent Systems. I approach each project with a focus on reliability, maintainability, and code quality.",
      ],
      code: {
        role: "Software Developer",
        services: "websites and web platforms",
        location: "Verona / Gela, IT",
        focus: ["full-stack web", "embedded C"],
        status: "master degree student and software/firmware developer",
      },
      facts: [
        ["focus", "Full-stack web · Embedded"],
        ["education", "Computer Engineering"],
        ["languages", "Italian · English B2"],
      ],
    },
    profileCard: {
      file: "profile.jpeg",
      title: "Bruno Vincenzi",
      caption: "Web development · Verona and Gela",
      fields: [
        ["role", "Software Developer"],
        ["working in", "Verona and Gela"],
        ["education", "Computer Engineering"],
      ],
    },
    experience: {
      path: "portfolio/experience.log",
      kicker: "// experience",
      title: "Professional experience.",
      intro:
        "Experience in web application and embedded firmware development, connecting requirements, architecture, and implementation.",
      currentStatus: "Current",
      experiences: [
        {
          id: "LOG_003",
          period: "Today",
          role: "Firmware Developer",
          company: "Edalab S.r.l.",
          description:
            "Embedded firmware development in C, microcontroller management, and low-level control logic design across different hardware environments.",
          tags: ["embedded C", "microcontrollers", "low level"],
          status: "Current",
        },
        {
          id: "LOG_002",
          period: "Oct—Dec 2023",
          role: "Web Developer · Internship",
          company: "Filosoft S.r.l. · Verona",
          description:
            "Developed a trading web application and integrated its data through GraphQL APIs.",
          tags: ["React", "GraphQL", "CSS"],
          status: "Completed",
        },
        {
          id: "LOG_001",
          period: "Apr—Jun 2023",
          role: "Web Developer · Internship",
          company: "Filosoft S.r.l. · Verona",
          description:
            "Contributed to a web application for the restaurant industry, focusing on usability and screen layout.",
          tags: ["Next.js", "HTML", "SCSS"],
          status: "Completed",
        },
      ],
      educationLabel: "education[]",
      educationCount: "3 entries",
      education: [
        {
          id: "EDU_03",
          status: "IN PROGRESS",
          title: "Computer Engineering for Intelligent Systems",
          description: "Master's degree · University of Verona",
        },
        {
          id: "EDU_02",
          status: "COMPLETED",
          title: "Computer Science",
          description: "Bachelor's degree · University of Verona",
        },
        {
          id: "EDU_01",
          status: "2016—2021",
          title: "Elio Vittorini Language High School",
          description: "Diploma · 92/100 · Gela",
        },
      ],
    },
    skills: {
      path: "portfolio/skills.json",
      kicker: "// skills",
      title: "Technical skills",
      readout: ["AREAS 03", "WEB & EMBEDDED", "UP TO DATE"],
      cardStatus: "active skill set",
      cards: [
        {
          code: "01",
          title: "Embedded systems",
          type: "specialisation",
          items: ["C", "Firmware", "Microcontrollers", "Control logic"],
        },
        {
          code: "02",
          title: "Full-stack web development",
          type: "websites and platforms",
          items: [
            "React",
            "Next.js",
            "JavaScript",
            "HTML / CSS / SCSS",
            "Application logic and data",
            "REST / GraphQL APIs",
          ],
        },
        {
          code: "03",
          title: "Software & languages",
          type: "complementary skills",
          items: ["Java", "JavaFX", "English B2", "A1 / B driving licences"],
        },
      ],
    },
    contact: {
      path: "portfolio/contact.js",
      kicker: "// contact",
      title: "Let's discuss your",
      titleAccent: "next project.",
      prompt: "contact.email",
      channel: "direct channel",
      status:
        "I work in both Verona and Gela. Let's discuss your website, web platform, or custom application.",
      copy: "Copy email",
      copied: "Copied",
      phone: "Phone",
      linkedin: "LinkedIn",
    },
    footer: {
      built: "Designed and developed with React",
      top: "Back to top ↑",
    },
  },
};
