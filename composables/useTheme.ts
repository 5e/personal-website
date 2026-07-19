export function useTheme() {
  const theme = useState<"light" | "dark">("theme", () => "light");

  function apply() {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme.value);
  }

  function toggle() {
    theme.value = theme.value === "dark" ? "light" : "dark";
    apply();
  }

  function init() {
    if (typeof window === "undefined") return;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme.value = prefersDark ? "dark" : "light";
    apply();
  }

  return { theme, toggle, init };
}
