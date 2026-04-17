import { createContext, useState } from "react";
import { useFavorites } from "../hooks/useFavorites";
import type { animal } from "../interfaces/animals";
import { useAnimals } from "../hooks/useAnimals";
// createContext + AppProvider + useAppContext

// tipado de GlobalContext
interface GlobalContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  favorites: animal[]; // o el tipo que devuelva tu hook
  swapFavorite: (id: animal) => void;
  animals: animal[];
  filterAnimals: (specie: string) => void;
}

export const userName: string = "Ada";

// 1. Crear el Almacén (Contexto)
export const GlobalContext = createContext<GlobalContextType>(null);

// 2. Crear el Proveedor (El que reparte la lógica)
export function GlobalProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState(false);
  const { favorites, swapFavorite } = useFavorites();
  const { animals, filterAnimals } = useAnimals();

  const toggleDarkMode = () => {
    console.log("Toggling dark mode: ", !darkMode);
    setDarkMode(!darkMode)
  };

  return (
    <GlobalContext.Provider value={{ darkMode, toggleDarkMode, favorites, swapFavorite, animals, filterAnimals }}>
      {children}
    </GlobalContext.Provider>
  );
}