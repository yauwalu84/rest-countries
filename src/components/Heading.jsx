import React, { useState } from "react";
import { FaMoon } from "react-icons/fa"; // Import only the moon icon

export default function Header() {
  const [mode, setMode] = useState(true);

  const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMode(!mode);
  };

  return (
    <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
      <div className="flex container mx-auto">
        <h1>Where in the world?</h1>
        <div className="ml-auto font-medium">
          <button onClick={toggleDarkMode} className="flex items-center">
            <FaMoon className="mr-2" />
            <span>{mode ? "Dark Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
