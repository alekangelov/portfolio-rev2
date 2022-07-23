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
    amount: 10,
    years: 4,
    description:
      "I love typescript, it's slow but it has the best type system (in my oppinion, ofcourse).",
  },
  {
    name: "Javascript",
    amount: 10,
    years: 6,
    description:
      "Typescript solves JavaScript's issues, but I started out with it. Has sentimental value.",
  },
  {
    name: "React (Native)",
    amount: 10,
    years: 4,
    description: "Good UI library, maybe the best?",
  },
  {
    name: "Solid",
    amount: 4,
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
    amount: 10,
    years: 4,
    description:
      "When I want to do anything backend, Node is my safe and comfortable choice.",
  },
  {
    name: "Databases",
    amount: 10,
    years: 5,
    description:
      "I like both Document and SQL databses. Mainly worked with Maria/MySql and Postgres.",
  },
  {
    name: "GraphQL",
    amount: 10,
    years: 4,
    description:
      "Better than REST sometimes, have experience in the front and back end of the tech.",
  },
  {
    name: "Flutter/Dart",
    amount: 6,
    years: 1,
    description:
      "Writing apps in Flutter is fun, but the general architecture of Flutter is convoluted.",
  },
  {
    name: "Rust",
    amount: 3,
    years: 0.5,
    description:
      "Amazing, intuitive and fast language that is taking the world by storm.",
  },
];
