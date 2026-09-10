"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="sw-theme-toggle sw-theme-placeholder" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`sw-theme-toggle ${isDark ? "is-dark" : "is-light"}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="sw-theme-icon">
        {isDark ? "☾" : "☀"}
      </span>

      <span className="sw-theme-track">
        <span className="sw-theme-dot" />
      </span>
    </button>
  );
}