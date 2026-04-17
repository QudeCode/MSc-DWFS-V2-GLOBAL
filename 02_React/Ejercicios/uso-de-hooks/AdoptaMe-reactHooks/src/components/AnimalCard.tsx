import { useContext } from 'react';
import type { animal } from '../interfaces/animals';
import './AnimalCard.css';
import { GlobalContext } from '../context/AppContext';

// consume useContext + useFavorites

export default function AnimalCard({animal}: {animal: animal}) { 
    const { favorites, swapFavorite } = useContext(GlobalContext)

    return (
        <article key={animal.id} className="animal-card">
            <p>{animal.emoji}</p>
            <h3>{animal.name}</h3>
            <p>{animal.breed}</p>
            <p>Edad: {animal.age} {animal.age > 1 ? "años" : "año"}</p>
            <button onClick={() => swapFavorite(animal)}>{favorites.includes(animal) ? "🤍 Add" : "❤️ Fav"}</button>

        </article>
    );
};