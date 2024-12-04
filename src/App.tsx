import { useState, useEffect } from "react";
import "./App.css";
import { Head } from "@impalajs/react/head";

interface AppProps {
  title: string;
}

export const App: React.FC<React.PropsWithChildren<AppProps>> = ({
  children,
  title,
}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Update the document's class and save theme preference
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Head>
        <title>{title || "FitAi - Workout Assistant"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Create your own AI chat bot" />
      </Head>
      <header className="header p-4 bg-gray-100 dark:bg-gray-900 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          FitAi - Workout Assistant
        </h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <main>{children}</main>
    </>
  );
};