import { useState } from "react";
import "./App.css";
import { Head } from "@impalajs/react/head";

interface AppProps {
  title: string;
}

export const App: React.FC<React.PropsWithChildren<AppProps>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>FitAi - Workout Assistant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Create your own AI chat bot" />
      </Head>
      {children}
    </>
  );
};

//from here on and tailwind.config.js

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
      <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
          {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
  );
};

export default ThemeToggle;

import ThemeToggle from './ThemeToggle';

function App() {
    return (
        <div className="app">
            <header className="header p-4 bg-gray-100 dark:bg-gray-900">
                <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">FitAi</h1>
                <ThemeToggle />
            </header>
            {/* Rest of the app */}
        </div>
    );
}

export default App;
