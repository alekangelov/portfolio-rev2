import { footer } from "./style.css";

export const Footer = () => {
  return (
    <footer className={footer}>
      <p>
        {new Date().getFullYear()} &copy; Alek Angelov - Omnia Jura Reservata
      </p>
      <p>
        <span role="icon">❤️</span>
        <span role="icon">➕</span>
        <span role="icon">⚛️</span>
        <span role="icon">➕</span>
        <span role="icon">📦</span>
      </p>
    </footer>
  );
};
