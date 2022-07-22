import { splitInHalf } from "@utils";

export type P = {
  name: string;
  amount: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  years: number | string;
  description?: string;
};

const whatIDo: P[] = [
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
    description: "Typescript solves JavaScript's issues.",
  },
  {
    name: "React (Native)",
    amount: 10,
    years: 4,
    description: "Good UI library, maybe the best?",
  },
  {
    name: "Styling",
    amount: 10,
    years: "10+",
    description:
      "Have been writing CSS since I was 14. I love it. I've also worked with S(A)(C)SS, LESS, Emotion, Styled Components, Vanilla Extract and a bunch I'm probably forgetting.",
  },
  {
    name: "Node",
    amount: 10,
    years: 4,
    description:
      "When I want to do anything backend, Node is my safe and comfortable choice.",
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
      "Been dabbling with rust for the past year. It's an amazing and fast language that is going to take the world by storm.",
  },
];

export const masonrySkills = splitInHalf(whatIDo);
