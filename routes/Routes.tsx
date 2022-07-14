import { Layout } from "@components";
import { useTransition, a } from "@react-spring/web";
import { Route, Routes as DomRoutes, useLocation } from "react-router-dom";
import { Home } from "./Home";

export const Routes = () => {
  const location = useLocation();
  const transition = useTransition(location, {
    from: {
      opacity: 0,
      position: "absolute",
    },
    enter: {
      opacity: 1,
      position: "relative",
    },
    leave: {
      opacity: 0,
      position: "absolute",
    },
    trail: 100,
  });
  return (
    <Layout location={location}>
      {transition(({ opacity, position }, location) => {
        return (
          <a.div
            style={{
              opacity,
              position: position as any,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <DomRoutes location={location}>
              <Route path="/" element={<Home />} />
            </DomRoutes>
          </a.div>
        );
      })}
    </Layout>
  );
};
