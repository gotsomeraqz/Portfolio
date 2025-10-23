"use client";

import React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeSwitcherProps {
  defaultValue?: Theme;
  value: Theme;
  onChange: (theme: Theme) => void;
}

export function ThemeSwitcher({ defaultValue = "system", value, onChange }: ThemeSwitcherProps) {
  const options: Theme[] = ["light", "dark", "system"];

  return (
    <div role="group" aria-label="Theme Switcher" className="inline-flex overflow-hidden rounded-full border border-border bg-background text-foreground shadow-sm">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            aria-label={`Set ${opt} theme`}
            onClick={() => onChange(opt)}
            className={[
              "px-3 py-1.5 text-sm capitalize transition-colors focus:outline-none focus-visible:ring-2",
              active ? "bg-foreground text-background" : "hover:bg-muted",
            ].join(" ")}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default ThemeSwitcher;
