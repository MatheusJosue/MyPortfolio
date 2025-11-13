"use client";

import { useTheme } from "@/hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Mudar para tema ${theme === "light" ? "escuro" : "claro"}`}
      title={`Tema ${theme === "light" ? "claro" : "escuro"}`}
    >
      {theme === "light" ? (
        <FiMoon className={styles.icon} />
      ) : (
        <FiSun className={styles.icon} />
      )}
    </button>
  );
};
