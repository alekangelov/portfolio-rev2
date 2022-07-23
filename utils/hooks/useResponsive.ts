import { media } from "@styles";
import { useMediaQuery } from "usehooks-ts";

const [, tabletMedia] = media.tablet.split("screen and ");
const [, desktopMedia] = media.desktop.split("screen and ");
console.log({ tabletMedia, desktopMedia });
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

export const useResponsiveValue = <T extends number | string>(
  value?: ResponsiveValue<T>
) => {
  const { tablet, desktop } = useResponsive();
  console.log(tablet, desktop);
  if (!value) return;
  if (desktop && value.desktop) {
    return value.desktop;
  }
  if (tablet && value.tablet) {
    return value.tablet;
  }
  return value.base || value.tablet || value.desktop;
};
