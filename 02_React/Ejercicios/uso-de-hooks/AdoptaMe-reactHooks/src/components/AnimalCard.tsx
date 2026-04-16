import type { animal } from '../interfaces/animals';
import './AnimalCard.css';


export default function AnimalCard({animal}: {animal: animal}) { 
    return (
        <div className="animal-card">
            <p>{animal.emoji}</p>
            <h3>{animal.name}</h3>
            <p>{animal.breed}</p>
            <p>{animal.age}</p>
            <button>❤️ Fav</button>

        </div>
    );
};