import { a, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { Grid } from "components/Grid";
import { Spacing } from "components/Spacing";
import {
  MdClose,
  MdDesignServices,
  MdEmail,
  MdHome,
  MdInfo,
  MdMenu,
} from "react-icons/md";
import { useBoolean } from "usehooks-ts";
import { lerp } from "utils/lerp";
import {
  navbar,
  notch,
  page,
  container,
  menu,
  hiring,
  paddedContainer,
  heroTitle,
} from "./styles.css";
import Lottie from "react-lottie";
import animationData from "./hero.json";

type M = {
  toggle?: VoidFunction;
  open?: boolean;
};
const spanStyle = { fontSize: 8 };
const Menu = ({ toggle, open }: M) => {
  const styles = useSpring({
    to: async (next) => {
      if (open) {
        return next({
          display: "block",
          opacity: 1,
          transform: "translateY(0px)",
        });
      }
      await next({
        opacity: 0,
        transform: "translateY(8px)",
      });
      return next({ display: "none" });
    },
  });
  return (
    <a.div style={styles} className={menu.base}>
      <Grid align="center" justify="between">
        <Grid.Item>
          <div className={navbar.brand}>
            <div className={navbar.logo}></div>
            <div className={navbar.brandText}>ACME</div>
          </div>
        </Grid.Item>
        <Grid.Item>
          <button onClick={toggle} className={navbar.button}>
            <MdClose />
          </button>
        </Grid.Item>
      </Grid>
      <Spacing space="md" />
      <Grid gap="none" wrap>
        <Grid.Item className={menu.itemWrapper} size="12">
          <a href="#" className={menu.item}>
            <MdHome />
            <span style={spanStyle}>Home</span>
          </a>
        </Grid.Item>
        <Grid.Item className={menu.itemWrapper} size="12">
          <a href="#" className={menu.item}>
            <MdInfo />
            <span style={spanStyle}>About</span>
          </a>
        </Grid.Item>
        <Grid.Item className={menu.itemWrapper} size="12">
          <a href="#" className={menu.item}>
            <MdDesignServices />
            <span style={spanStyle}>Services</span>
          </a>
        </Grid.Item>
        <Grid.Item className={menu.itemWrapper} size="12">
          <a href="#" className={menu.item}>
            <MdEmail />
            <span style={spanStyle}>Contact</span>
          </a>
        </Grid.Item>
      </Grid>
    </a.div>
  );
};

export const Example = () => {
  const { value: open, toggle: toggleOpen } = useBoolean(false);
  return (
    <div className={page}>
      <div className={notch}></div>
      <div className={container}>
        <div className={navbar.base}>
          <Menu open={open} toggle={toggleOpen} />
          <div className={navbar.brand}>
            <div className={navbar.logo}></div>
            <div className={navbar.brandText}>ACME</div>
          </div>
          <button onClick={toggleOpen} className={navbar.button}>
            <MdMenu />
          </button>
        </div>
      </div>
      <div className={clsx(container, paddedContainer)}>
        <div className={hiring.base}>
          <div className={hiring.left}>We're hiring!</div>
          <div className={hiring.right}>Check out our openings!</div>
        </div>
      </div>

      <div className={clsx(container, paddedContainer)}>
        <Lottie
          options={{
            animationData,
            loop: true,
          }}
        />
      </div>
      <div className={clsx(container, paddedContainer)}>
        <h1 className={heroTitle}>
          We're simply <br />{" "}
          <b style={{ fontWeight: 900, fontSize: 18 }}>
            A Company <br />{" "}
            <span style={{ fontWeight: 900, fontSize: 24 }}>
              Making Everything
            </span>
          </b>
        </h1>
      </div>
    </div>
  );
};
