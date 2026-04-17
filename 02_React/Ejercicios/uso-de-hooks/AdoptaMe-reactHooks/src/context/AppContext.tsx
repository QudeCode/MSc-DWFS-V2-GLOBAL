import { createContext, useState } from "react";
import { useFavorites } from "../hooks/useFavorites";
import type { animal } from "../interfaces/animals";
// createContext + AppProvider + useAppContext

// tipado de GlobalContext
interface GlobalContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  favorites: animal[]; // o el tipo que devuelva tu hook
  swapFavorite: (id: animal) => void;
}

// 1. Crear el Almacén (Contexto)
export const GlobalContext = createContext<GlobalContextType>(null);

// 2. Crear el Proveedor (El que reparte la lógica)
export function GlobalProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState(false);
  const { favorites, swapFavorite } = useFavorites();

  const toggleDarkMode = () => {
    console.log("Toggling dark mode: ", !darkMode);
    setDarkMode(!darkMode)
  };

  return (
    <GlobalContext.Provider value={{ darkMode, toggleDarkMode, favorites, swapFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
}