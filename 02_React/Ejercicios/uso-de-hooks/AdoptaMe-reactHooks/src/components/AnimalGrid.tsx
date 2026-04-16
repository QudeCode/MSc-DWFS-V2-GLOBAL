import type { animal } from '../interfaces/animals';
import AnimalCard from './AnimalCard';
import './AnimalGrid.css';

export default function  AnimalGrid({animals}: {animals: animal[]}) {

    return (
        <div className="animals-content">
            <p>{animals.length} animales disponibles</p>
            <div className='animals-grid'>
                {animals.map((animal) => (
                    <AnimalCard animal={animal}></AnimalCard>
                ))}
            </div>

            <p>... más animales ...</p>
        </div>
    );
};