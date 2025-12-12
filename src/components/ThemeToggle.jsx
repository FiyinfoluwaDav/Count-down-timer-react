import React from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

export default function ThemeToggle({ theme = "dark", toggleTheme }) {
  const isLight = theme === "light";
  const checked = isLight;
  return (
    <label className="toggle-switch">
      <input
        aria-label="Toggle theme"
        aria-checked={checked}
        role="switch"
        type="checkbox"
        checked={checked}
        onChange={() => toggleTheme && toggleTheme()}
      />
      <span className="switch">
        <span className="knob">
          <SunIcon className="icon sun" />
          <MoonIcon className="icon moon" />
        </span>
      </span>
    </label>
  );
}

