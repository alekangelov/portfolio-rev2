import { media } from "@styles";
import { useMediaQuery } from "usehooks-ts";

const [, tabletMedia] = media.tablet.split("screen and ");
const [, desktopMedia] = media.desktop.split("screen and ");
export const useResponsive = () => {
  const mobile = true;
  const tablet = useMediaQuery(tabletMedia);
  const desktop = useMediaQuery(desktopMedia);
  return {
    mobile,
    tablet,
    desktop,
  };
};

type ResponsiveValue<T> = {
  base: T;
  tablet?: T;
  desktop?: T;
};

export const useResponsiveValue = <T extends any>(
  value?: ResponsiveValue<T>
) => {
  const { tablet, desktop } = useResponsive();
  if (!value) return;
  if (desktop && typeof value.desktop !== "undefined") {
    console.log("1");
    return value.desktop;
  }
  if (tablet && typeof value.tablet !== "undefined") {
    console.log("2");
    return value.tablet;
  }
  console.log("3", value);
  return value.base || value.tablet || value.desktop;
};
