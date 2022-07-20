import { textGradient } from "@styles";
import { about } from "./style.css";

export const About = () => {
  return (
    <div className={about.container}>
      <h1 className={about.title}>
        Hey there, I'm{" "}
        <span className={textGradient.primaryTerciary}>Alek</span>.{" "}
        <span role="icon">👋</span>
      </h1>
      <p>
        A software developer that hopes to be an engineer in the near future
        (taking a crack at college again <span role="icon">🥴</span>). Been
        writing some words and symbols that makes other stuff appear on screens
        since I was 12. Being a visual person, I've always gravitated towards
        stuff that's flashy. Who even reads this? I'm not sure. I do front-end
        stuff, but I also do other stuff I guess?
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
    </div>
  );
};
