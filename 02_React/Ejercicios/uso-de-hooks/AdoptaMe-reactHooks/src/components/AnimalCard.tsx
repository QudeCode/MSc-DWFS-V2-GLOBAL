import type { animal } from '../interfaces/animals';
import './AnimalCard.css';

// consume useContext + useFavorites

export default function AnimalCard({animal}: {animal: animal}) { 
    return (
        <article key={animal.id} className="animal-card">
            <p>{animal.emoji}</p>
            <h3>{animal.name}</h3>
            <p>{animal.breed}</p>
            <p>Edad: {animal.age} {animal.age > 1 ? "años" : "año"}</p>
            <button>❤️ Fav</button>

        </article>
    );
};