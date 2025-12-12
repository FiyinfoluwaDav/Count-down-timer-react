import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import Footer from "./Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved) return saved;
    const prefers = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefers ? "light" : "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <>
      <div className="app">
        <CountdownTimer theme={theme} toggleTheme={toggleTheme} />
      </div>
      <Footer />
    </>
  );
}

export default App;
