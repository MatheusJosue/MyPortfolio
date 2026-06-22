"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_EVENT = "themechange";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = localStorage.getItem("theme") as Theme | null;

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getServerSnapshot = (): Theme => "light";

const subscribe = (callback: () => void) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const notify = () => callback();

  window.addEventListener("storage", notify);
  window.addEventListener(THEME_EVENT, notify);
  mediaQuery.addEventListener("change", notify);

  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(THEME_EVENT, notify);
    mediaQuery.removeEventListener("change", notify);
  };
};

const applyTheme = (newTheme: Theme) => {
  const root = document.documentElement;

  if (newTheme === "dark") {
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.style.colorScheme = "light";
  }

  localStorage.setItem("theme", newTheme);
};

export const useTheme = () => {
  const theme = useSyncExternalStore(
    subscribe,
    getPreferredTheme,
    getServerSnapshot,
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return { theme, toggleTheme, mounted: true };
};
