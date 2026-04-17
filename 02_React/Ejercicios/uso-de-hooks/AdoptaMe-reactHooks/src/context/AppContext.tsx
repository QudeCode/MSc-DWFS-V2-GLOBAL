import { createContext, useState } from "react";
// createContext + AppProvider + useAppContext

// 1. Crear el Almacén (Contexto)
export const GlobalContext = createContext<any>(null);

// 2. Crear el Proveedor (El que reparte la lógica)
export function GlobalProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("Toggling dark mode: ", !darkMode);
    setDarkMode(!darkMode)
  };

  return (
    <GlobalContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
}