import { textGradient } from "@styles";
import { Grid, HR } from "components";
import { about, li } from "./style.css";

type P = {
  name: string;
  amount: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  years: number;
  description?: string;
};

const ListItem = ({ name, amount, years, description }: P) => {
  return (
    <div className={li.parent}>
      <Grid gap="md">
        <Grid.Item size="12">
          <Grid align="center" justify="between">
            <Grid.Item>
              <h4 className={li.name}>{name}</h4>
            </Grid.Item>
            <Grid.Item>
              <h4 className={li.amount}>{years} years</h4>
            </Grid.Item>
          </Grid>
        </Grid.Item>
        <Grid.Item size="12">
          <p className={li.description}>{description}</p>
        </Grid.Item>
      </Grid>
      <div className={li.track}>
        <div className={li.fill}>
          <div className={li.thumb} />
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className={about.container}>
      <h1 className={about.title}>
        Hey there, I'm{" "}
        <span className={textGradient.primaryTerciary}>Alek</span>.{" "}
        <span role="icon">👋</span>
      </h1>
      <p>
        A software developer (still not an engineer, hopefully soon{" "}
        <span role="icon">🥴</span>). Been writing some words and symbols that
        makes other stuff appear on screens since I was 12. Being a visual
        person, I've always gravitated towards stuff that's flashy. Who even
        reads this? I'm not sure. I do front-end stuff, but I also do other
        stuff I guess?
      </p>
      <br />
      <p>
        I like TypeScript, but it's insanely slow. I blame Microsoft for that.
        That's why I started branching out to other languages. Currently having
        a love affair with Rust and I think I might be falling in love.
      </p>
      <br />
      <p>
        I've worked on a handful of projects, but I'm currently working as a
        Lead/Architect @ <a href="https://pabau.com">Pabau</a>
      </p>
      <br />
      <p>
        Here's a little rundown of what I know and what tech I've used and for
        how long.
      </p>
      <HR />
      <hgroup>
        <h2>What I've been doing</h2>
        <h3>and for how long and stuff</h3>
      </hgroup>
      <Grid gap="md">
        <Grid.Item size="12">
          <ListItem name="TypeScript" amount={10} years={4} />
        </Grid.Item>
      </Grid>
    </div>
  );
};
