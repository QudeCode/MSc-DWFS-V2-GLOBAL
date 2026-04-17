import { useContext } from 'react';
import type { animal } from '../interfaces/animals';
import './FavoritesSidebar.css';
import { GlobalContext } from '../context/AppContext';

// reutiliza useFavorites
import { userName } from '../context/AppContext';

export default function FavoritesSidebar() {
    const { favorites, swapFavorite } = useContext(GlobalContext)

    return (
        <aside className="favorites-sidebar">
            <h2>❤️ Favoritos de {userName}</h2>
            <div className='favorites-list'>
                {favorites.map((animal: animal) => (
                    <div className='favorite-item' key={animal.id}>
                        <p className='animal-name'>{animal.emoji} {animal.name}</p><p className='raza'>· {animal.breed}</p><button onClick={() => swapFavorite(animal)} className='close-button'>X</button>
                    </div>
                ))}
            </div>
            <p className='favorites-counter'>{favorites.length} animales guardados</p>
        </aside>
    );
};