import { lightStyles, darkStyles } from "./refs";
import { THEME_LS_KEY } from "./config";
import { loadLS, saveLS } from "./local-storage-api";

export function setupTheme() {
  const savedTheme = loadLS(THEME_LS_KEY);
  const systemTheme = getSystemTheme();

  if (savedTheme === null) {
    return;
  }

  if (savedTheme !== systemTheme) setTheme(savedTheme);
}

export function getSystemTheme() {
  const darkTheme = matchMedia("(prefers-color-scheme: dark)").matches;

  return darkTheme ? "dark" : "light";
}

export function setTheme(theme) {
  let lightMedia = theme === "light" ? "all" : "not all";
  let darkMedia = theme === "dark" ? "all" : "not all";

  [...lightStyles].forEach((link) => (link.media = lightMedia));
  [...darkStyles].forEach((link) => (link.media = darkMedia));
}
