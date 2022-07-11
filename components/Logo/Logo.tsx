import { vars } from "styles";
import { parseColor } from "styles/helpers";

type P = JSX.IntrinsicElements["svg"] & {
  color?: keyof typeof vars.colors;
  onColor?: keyof typeof vars.onColors;
};

export const Logo = ({ color, onColor }: P) => {
  return (
    <svg
      width="29"
      height="24"
      viewBox="0 0 29 24"
      style={{
        fill: parseColor(
          (color && vars.colors[color]) ||
            (onColor && vars.onColors[onColor]) ||
            ""
        ),
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 0L21.2001 10.4516L23.3306 7.8553C23.7861 7.3002 24.6012 7.20966 25.1674 7.65128C25.7538 8.10863 25.8482 8.95923 25.3765 9.53411L22.7017 12.7939L28.2673 21.4757C28.6692 22.1027 28.4766 22.9376 27.8407 23.3251C27.2249 23.7003 26.4222 23.5151 26.033 22.9081L20.9319 14.9507L14.5 22.7891L8.06812 14.9507L2.96696 22.9081C2.5778 23.5151 1.77509 23.7003 1.15932 23.3251C0.523366 22.9376 0.330759 22.1027 0.732677 21.4757L6.29831 12.7939L3.62347 9.53411C3.15175 8.95923 3.24623 8.10863 3.83261 7.65128C4.39882 7.20966 5.21391 7.3002 5.6694 7.8553L7.79984 10.4516L14.5 0ZM9.56966 12.6085L14.5 18.6169L19.4303 12.6085L14.5 4.91759L9.56966 12.6085Z"
      />
    </svg>
  );
};