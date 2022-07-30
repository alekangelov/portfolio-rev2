import { splitInHalf } from "@utils";

export type P = {
  name: string;
  amount: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  years: number | string;
  description?: string;
};

export const skills: P[] = [
  {
    name: "Typescript",
    amount: 4,
    years: 4,
    description:
      "I love typescript, it's slow but it has the best type system ever (in my oppinion, ofcourse).",
  },
  {
    name: "Javascript",
    amount: 6,
    years: 6,
    description:
      "Typescript solves JavaScript's issues, but I started out with it. Has sentimental value.",
  },
  {
    name: "React (Native)",
    amount: 4,
    years: 4,
    description: "Good UI library, maybe the best?",
  },
  {
    name: "Solid",
    amount: 1,
    years: 0.5,
    description:
      "Insane UI library, will maybe overtake React if it continues to grow",
  },
  {
    name: "Styling",
    amount: 10,
    years: "10+",
    description:
      "Have worked with S(A)(C)SS, LESS, Emotion, Styled Components, Vanilla Extract etc.",
  },
  {
    name: "Node",
    amount: 4,
    years: 4,
    description:
      "When I want to do anything backend, Node is my safe and comfortable choice.",
  },
  {
    name: "Databases",
    amount: 5,
    years: 5,
    description:
      "I like both Document and SQL databases. Mainly worked with Maria/MySql, Postgres and Mongo.",
  },
  {
    name: "GraphQL",
    amount: 4,
    years: 4,
    description:
      "Better than REST sometimes, have experience in the front and back end of the tech.",
  },
  {
    name: "Flutter/Dart",
    amount: 1,
    years: 1,
    description:
      "Writing apps in Flutter is fun, but the general architecture of Flutter is convoluted.",
  },
  {
    name: "Rust",
    amount: 1,
    years: 0.5,
    description:
      "Amazing, intuitive and fast language that is taking the world by storm.",
  },
  {
    name: "Scrum",
    amount: 3,
    years: 3,
    description: "A neccesary evil.",
  },
  {
    name: "Mgmt",
    amount: 4,
    years: "1+",
    description: "Like the band, but not really.",
  },
  {
    name: "Mentorship",
    amount: 4,
    years: "3+",
    description:
      "I love to help people grow and develop. Been doing it for a while now.",
  },
];

type Project = {
  name: string;
  position: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Pabau",
    position: "Frontend Lead - Present",
    description: `A enterprise level CRM software for clinics to manage their bussiness. 
    Bells and whistles included. I mainly manage the developers and the frontend.`,
    link: "https://pabau.com",
    image: "/projects/pabau.png",
    tags: [
      "work",
      "react",
      "node",
      "typescript",
      "graphql",
      "postgres",
      "hasura",
    ],
  },
  {
    name: "Endava (Fintech + Internal)",
    position: "Senior Developer - November 2020 -> November 2021",
    description: `While working for Endava I ended up making a bunch of various POCs and worked on a huge fintech frontend.
                  Was really involved with architecture and business requirements of POCs and tightly coupled with business
                  on the fintech project as well.`,
    link: "https://endava.com",
    image: "/projects/endava.png",
    tags: ["work", "react", "fintech"],
  },
  {
    name: "Digital Present",
    position: "Frontend Lead - February 2019 -> November 2020",
    description: `Was in charge of the frontends and general architecture of apps. Tried to sneak in as much
                  bleeding tech as possible. Worked on a bunch of stuff with Three, WebGL, GraphQL etc.
                  Shipped a bunch of web apps and crossplatform apps.`,
    link: "https://digitalpresent.io",
    image: "/projects/digitalpresent.png",
    tags: [
      "work",
      "react",
      "node",
      "typescript",
      "graphql",
      "mariadb",
      "postgres",
      "mongodb",
    ],
  },
  {
    name: "Zaibatsu Bud",
    position: "Creator",
    description: `A combo aggregator for Tekken made with Electron and React. It can also overlay on top of the game so you can practice your combos.`,
    link: "https://github.com/alekangelov/zaibatsu-bud_app",
    image: "/projects/zaibatsubud.jpeg",
    tags: ["open-source", "electron", "react"],
  },
  {
    name: "NT Dashboard",
    position: "Creator",
    description: `A dashboard for your New Tab in a browser. Beautiful, extensible and easy to use.`,
    link: "https://github.com/alekangelov/nt-dashboard",
    image: "/projects/nt-dashboard.png",
    tags: ["open-source", "react"],
  },
  {
    name: "React Alert Async",
    position: "Creator",
    description: `React components for altering the default alert messages of the browser.`,
    link: "https://github.com/alekangelov/react-alert-async",
    image: "/projects/reactalertasync.jpeg",
    tags: ["open-source", "react"],
  },
  {
    name: "Solid Hotkeys",
    position: "Creator",
    description: `A hotkey manager for SolidJS with optimistic default prevention. Weighs around 2kb and only attaches 2 event listeners.`,
    link: "https://github.com/alekangelov/solid-hotkeys",
    image: "/projects/solid-hotkeys.png",
    tags: ["open-source", "solid"],
  },
  {
    name: "Icarus UI",
    position: "Creator",
    description: `An isomorphic UI library that can be plugged into any framework. Built on top of Vanilla Extract.`,
    link: "https://github.com/alekangelov/icarus",
    image: "/projects/icarus.png",
    tags: ["open-source", "react"],
  },
];
