import { useSpring, animated } from "@react-spring/web";
import { vars } from "@styles";
import { getCSSVarValue, usePages, useResponsiveValue } from "@utils";
import { getMediumPosts } from "api/medium";
import { Card } from "components/Card";
import { Grid } from "components/Grid";
import { Spacing } from "components/Spacing";
import { Suspense } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useMeasure from "react-use-measure";
import { suspend } from "suspend-react";
import { arrowButton, draggable, draggableInner } from "./style.css";

const BlogPage = () => {
  const [ref, bounds] = useMeasure();
  const data = suspend(getMediumPosts, []);
  const size = useResponsiveValue({
    base: "12",
    tablet: "6",
    desktop: "4",
  });
  const gapWidth = getCSSVarValue(vars.spacing.md);
  const { page, onBack, onNext } = usePages(
    data.length / parseInt(size ?? "1")
  );
  const scroll = useSpring({
    to: {
      transform: `translate(-${page * bounds.width + gapWidth * page}px, 0px)`,
      delay: 0,
    },
    config: { mass: 5, tension: 2000, friction: 200 },
  });
  return (
    <div>
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
            {data.map((element) => {
              return (
                <Grid.Item size={size} key={element.guid}>
                  {/* @ts-ignore */}
                  <Card href={element.link} as="a">
                    <Card.Image src={element.thumbnail} />
                    <Card.Content>
                      <Card.Title>{element.title}</Card.Title>
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

export const Blog = () => {
  return (
    <Suspense>
      <BlogPage />
    </Suspense>
  );
};
