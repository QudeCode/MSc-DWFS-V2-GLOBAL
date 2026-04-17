// // createContext + AppProvider + useAppContext

interface AppContextType {
    darkMode: boolean;
    toggleDarkMode: (darkMode: boolean) => void;
  }

import { createContext, useState } from "react";

export const GlobalContext = createContext<AppContextType | undefined>(undefined);

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    console.log("toggleDarkMode", darkMode);
    setDarkMode((v) => {
        console.log("toggleDarkMode setDarkMode", v);
        return !v
    })
  };

  return (
    <GlobalContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
}

