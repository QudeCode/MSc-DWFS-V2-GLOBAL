import { useContext } from 'react';
import AnimalCard from './AnimalCard';
import './AnimalGrid.css';
import { GlobalContext } from '../context/AppContext';

// useEffect con [animals]

export default function  AnimalGrid() {

    const { animals } = useContext(GlobalContext)

    return (
        <div className="animals-content">
            <p>{animals.length} animales disponibles</p>
            <div className='animals-grid'>
                {animals.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                ))}
            </div>

            <p>... más animales ...</p>
        </div>
    );
};