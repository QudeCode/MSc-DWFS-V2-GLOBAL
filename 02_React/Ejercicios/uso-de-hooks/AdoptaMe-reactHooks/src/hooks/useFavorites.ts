// Custom Hook: gestión de favoritos

import { useState } from "react";
import type { animal } from "../interfaces/animals";

export function useFavorites() { 
    const [ favorites, setFavorites ] = useState<animal[]>([])

    function swapFavorite(animalSelected: animal) {
        console.log("[swapFavorite] current favorites: ", favorites, ", animalSelected: ", animalSelected.name)

        if(favorites.includes(animalSelected)) { // remove favorite
            setFavorites(favorites.filter((favorite) => favorite != animalSelected));
        } else { // add favorite
            const newFavorites = favorites.concat(animalSelected);
            setFavorites(newFavorites)
        }
    }

    return { favorites, swapFavorite }
}