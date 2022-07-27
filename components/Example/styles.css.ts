import { transition } from "@styles";
import { style } from "@vanilla-extract/css";

export const page = style({
  background: "#1e2535",
  color: "white",
  width: 256,
  aspectRatio: "7 / 14.99",
  borderRadius: 32,
  overflow: "hidden",
  position: "relative",
  paddingTop: 32,
});

export const notch = style({
  position: "absolute",
  top: 0,
  left: "50%",
  width: "60%",
  height: 24,
  transform: "translateX(-50%)",
  background: "black",
  borderBottomRightRadius: 12,
  borderBottomLeftRadius: 12,
});

export const container = style({
  maxWidth: "960px",
  margin: "0 auto",
  width: "90%",
});

export const navbar = {
  base: style({
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 16px",
    alignItems: "center",
    position: "relative",
  }),
  brand: style({
    display: "flex",
    alignItems: "center",
    gap: 8,
  }),
  logo: style({
    height: 16,
    width: 16,
    borderRadius: 8,
    background: "transparent",
    border: "2px solid white",
  }),
  brandText: style({
    fontSize: 8,
    fontWeight: 900,
  }),
  button: style({
    padding: 4,
    borderRadius: 4,
    background: "rgba(255,255,255,0.1)",
    border: "1px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
    transition: transition("color", "background"),
    selectors: {
      "&:hover": {
        background: "rgba(255,255,255,1)",
        color: "black",
      },
      "&:active": {
        transition: "none",
        background: "rgba(255,255,255,0.2)",
        color: "white",
      },
    },
  }),
};

export const menu = {
  base: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "auto",
    padding: "8px 16px",
    background: "#131823",
    backdropFilter: "blur(10px)",
    borderRadius: 8,
    zIndex: 5,
    border: "1px solid rgba(255,255,255,0.2)",
  }),
  item: style({
    fontSize: 12,
    fontWeight: 600,
    color: "white",
    background: "none",
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 0,
    padding: "8px 8px",
    textTransform: "uppercase",
    transition: transition("color", "background"),
    selectors: {
      "&:hover": {
        background: "rgba(255,255,255,0.1)",
      },
    },
  }),
  itemWrapper: style({
    selectors: {
      "&+&": {
        borderTop: "1px solid rgba(255,255,255,0.1)",
      },
    },
  }),
};

export const hiring = {
  base: style({
    margin: `16px 0px`,
    background: "#262f41",
    borderRadius: 8,
    fontSize: 8,
    display: "flex",
    overflow: "hidden",
  }),
  left: style({
    background: "black",
    fontWeight: 900,
    borderRadius: 8,
    padding: "8px 16px",
    textTransform: "uppercase",
  }),
  right: style({ padding: 8, textAlign: "center", flex: 1 }),
};

export const paddedContainer = style({
  padding: "0px 16px",
});

export const heroTitle = style({
  fontSize: 18,
  fontWeight: 600,
  margin: `12px 0px`,
  lineHeight: 1.5,
});
