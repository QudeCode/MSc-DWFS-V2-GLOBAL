import { useContext } from 'react';
import './FilterBar.css';
import { GlobalContext } from '../context/AppContext';

// botones de filtro

export default function FilterBar() {

    const { filterAnimals } = useContext(GlobalContext)

    return (
        <div className="filter-bar">
            <p>Filtrar por:</p> 
            <ul className="filter-buttons">
                <li><button onClick={() => filterAnimals("all")}>Todos</button></li>
                <li><button onClick={() => filterAnimals("dog")}>Perros</button></li>
                <li><button onClick={() => filterAnimals("cat")}>Gatos</button></li>
                <li><button onClick={() => filterAnimals("rabbit")}>Conejos</button></li>
            </ul>
        </div>
    );
};