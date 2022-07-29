import { useResponsiveValue } from "@utils";
import { footer } from "./style.css";

export const Footer = () => {
  const d = useResponsiveValue({
    base: "none",
    tablet: "block",
  });
  return (
    <footer className={footer}>
      <p>
        {new Date().getFullYear()} &copy; Alek Angelov - Omnia Jura Reservata
      </p>
      <p style={{ display: d }}>
        <span role="icon">❤️</span>
        <span role="icon">➕</span>
        <span role="icon">⚛️</span>
        <span role="icon">➕</span>
        <span role="icon">📦</span>
      </p>
    </footer>
  );
};
