import { useSpring, animated } from "@react-spring/web";
import { parseColor, vars } from "@styles";
import { useGesture } from "@use-gesture/react";
import { Grid, Card, Spacing } from "components";
import useMeasure from "react-use-measure";
import { projects } from "./data";
import { draggable, draggableInner, projectStyles } from "./style.css";

const y = <Card></Card>;

export const Projects = () => {
  const [scroll, api] = useSpring(() => ({
    x: 0,
    y: 0,
    delay: 0,
    config: { mass: 5, tension: 5000, friction: 200 },
  }));
  const [ref, bounds] = useMeasure();
  const bind = useGesture({
    onDrag: ({ down, offset: [x, y] }) => {
      console.log([x]);
      api.start({
        x: x * 1.5,
      });
    },
  });
  return (
    <div id="projects" className={projectStyles.container}>
      <p>
        I've done my fair share of projects throughout the years. <br /> Here's
        a{" "}
        <b style={{ fontWeight: 900, color: parseColor(vars.colors.primary) }}>
          {"<ul />"}
        </b>{" "}
        of my work history and some open source projects.
      </p>
      <Spacing space="xl" />
      <animated.div
        style={{ ...scroll }}
        className={draggable}
        {...bind()}
        ref={ref}
      >
        <div className={draggableInner}>
          <Grid wrap={false}>
            {projects.map((element, index) => {
              return (
                <Grid.Item size="12" tabletSize="6" desktopSize="4">
                  <Card>
                    <Card.Image src={element.image} />
                    <Card.Content>
                      <Card.ContentTop>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Description>
                          {element.description}
                        </Card.Description>
                      </Card.ContentTop>
                      <Card.TagWrapper>
                        {element.tags.map((e) => {
                          return (
                            <Card.Tag key={element.name + e}>{e}</Card.Tag>
                          );
                        })}
                      </Card.TagWrapper>
                      <Card.Link href={element.link}>
                        {element.tags.includes("open-source")
                          ? "Check it out"
                          : "Learn More"}
                      </Card.Link>
                    </Card.Content>
                  </Card>
                </Grid.Item>
              );
            })}
          </Grid>
        </div>
      </animated.div>
    </div>
  );
};
