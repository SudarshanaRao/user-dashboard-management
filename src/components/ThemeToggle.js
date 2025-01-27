import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div className="flex items-center">
      <label
        htmlFor="themeToggle"
        className={`relative inline-block h-8 w-14 cursor-pointer rounded-full ${
          isDarkMode ? "bg-green-500" : "bg-gray-300"
        } transition`}
      >
        <input
          type="checkbox"
          id="themeToggle"
          className="peer sr-only"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <span
          className="absolute inset-y-0 left-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:translate-x-6 peer-checked:text-green-600"
        >
          {!isDarkMode && <span>🌙</span>}
          {isDarkMode && <span>☀️</span>}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
