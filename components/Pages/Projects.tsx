import { useSpring, animated } from "@react-spring/web";
import { parseColor, vars } from "@styles";
import {
  getCSSVarValue,
  getPageSize,
  usePages,
  useResponsiveValue,
} from "@utils";
import { Grid, Card, Spacing, Modal, SafeImage } from "components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useMeasure from "react-use-measure";
import { useBoolean } from "usehooks-ts";
import { projects } from "./data";
import {
  draggable,
  draggableInner,
  projectModal,
  projectStyles,
  arrowButton,
} from "./style.css";

const y = <Card></Card>;

type V = typeof projects[0];
const SingleProject = ({
  element,
  size = "12",
}: {
  element: V;
  size?: any;
}) => {
  const { value, toggle, setValue } = useBoolean(false);
  return (
    <>
      <Modal visible={value} title={element.name} onVisibilityChange={setValue}>
        <SafeImage
          className={projectModal.image}
          src={`/images${element.image}`}
        />
        <Spacing space="xl" />
        <h3>{element.position}</h3>
        <Spacing space="sm" />
        <p>{element.description}</p>
        <Spacing space="xl" />
        <Card.TagWrapper>
          {element.tags.map((tag) => (
            <Card.Tag key={tag}>{tag}</Card.Tag>
          ))}
        </Card.TagWrapper>
        <Spacing space="xl" />

        <Card.Link target="_blank" href={element.link}>
          Check it out
        </Card.Link>
      </Modal>
      <Grid.Item size={size}>
        <Card onClick={toggle}>
          <Card.Image src={`/images${element.image}`} />
          <Card.Content>
            <Card.Title>{element.name}</Card.Title>
          </Card.Content>
        </Card>
      </Grid.Item>
    </>
  );
};

export const Projects = () => {
  const [ref, bounds] = useMeasure();
  const size = useResponsiveValue({
    base: "12",
    tablet: "6",
    desktop: "4",
  });
  const gapWidth = getCSSVarValue(vars.spacing.md);
  const { page, onBack, onNext } = usePages(getPageSize(projects.length, size));
  const scroll = useSpring({
    to: {
      transform: `translate(-${page * bounds.width + gapWidth * page}px, 0px)`,
      delay: 0,
    },
    config: { mass: 5, tension: 2000, friction: 200 },
  });
  return (
    <div id="projects" className={projectStyles.container}>
      <Grid align="center" justify="between">
        <Grid.Item size="12">
          <p>
            I've done my fair share of projects throughout the years. <br />{" "}
            Here's a{" "}
            <b
              style={{
                fontWeight: 900,
                color: parseColor(vars.colors.primary),
              }}
            >
              {"<ul />"}
            </b>{" "}
            of my work history and some open source projects.
          </p>
        </Grid.Item>
      </Grid>
      <Spacing space="xl" />
      <Grid>
        <Grid.Item>
          <button className={arrowButton} onClick={onBack}>
            <AiOutlineArrowLeft />
          </button>
        </Grid.Item>
        <Grid.Item>
          <button className={arrowButton} onClick={onNext}>
            <AiOutlineArrowRight />
          </button>
        </Grid.Item>
      </Grid>
      <Spacing space="xl" />
      <animated.div style={{ ...scroll }} className={draggable}>
        <div className={draggableInner} ref={ref}>
          <Grid wrap={false} gap="md">
            {projects.map((element, index) => {
              return (
                <SingleProject
                  element={element}
                  size={size}
                  key={element.name}
                />
              );
            })}
          </Grid>
        </div>
      </animated.div>
    </div>
  );
};
