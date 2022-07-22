import { media } from "@styles";
import { useMediaQuery } from "usehooks-ts";

export const useResponsive = () => {
  const mobile = true;
  const tablet = useMediaQuery(media.tablet);
  const desktop = useMediaQuery(media.desktop);
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
  if (!value) return;
  if (tablet && value.tablet) {
    return value.tablet;
  }
  if (desktop && value.desktop) {
    return value.desktop;
  }
  return value.base || value.tablet || value.desktop;
};
