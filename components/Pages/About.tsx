import { useSpring, a } from "@react-spring/web";
import { textGradient } from "@styles";
import { Grid, HR } from "components";
import { skills, P } from "./data";
import { about, li } from "./style.css";
import { Waypoint } from "react-waypoint";

const ListItem = ({ name, amount, years, description }: P) => {
  const [spring, api] = useSpring(() => {
    return {
      width: 0,
    };
  });
  const [inProps, inApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(24px)",
  }));
  return (
    <a.div
      style={{
        ...inProps,
      }}
    >
      <Waypoint
        onEnter={() => {
          api.start({
            width: amount * 10,
          });
          inApi.start({
            opacity: 1,
            transform: "translateY(0px)",
          });
        }}
        onLeave={() => {
          api.start({
            width: 0,
          });
          inApi.start({
            opacity: 0,
            transform: "translateY(24px)",
          });
        }}
      />
      <Grid gap="md" wrap className={li.parent}>
        <Grid.Item size="12">
          <Grid align="end" justify="between">
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
        <Grid.Item size="12">
          <div className={li.track}>
            <a.div
              className={li.fill}
              style={{
                width: spring.width.to((e) => `${e}%`),
              }}
            >
              <div className={li.thumb} />
            </a.div>
          </div>
        </Grid.Item>
      </Grid>
    </a.div>
  );
};

export const About = () => {
  const [inProps, inApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(24px)",
  }));
  return (
    <a.div style={inProps} className={about.container}>
      <Waypoint
        onEnter={() => {
          inApi.start({
            opacity: 1,
            transform: "translateY(0px)",
          });
        }}
      />
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
      <Grid.Masonry
        gap="md"
        wrap
        columns={{
          base: 2,
        }}
      >
        {skills.map((skill) => (
          <Grid.Item size="12">
            <ListItem {...skill} />
          </Grid.Item>
        ))}
      </Grid.Masonry>
    </a.div>
  );
};
