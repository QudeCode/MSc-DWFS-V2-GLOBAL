import type { animal } from '../interfaces/animals';
import './FavoritesSidebar.css';

export default function FavoritesSidebar({username, favorites}: {username: string, favorites: animal[]}) {
    return (
        <aside className="favorites-sidebar">
            <h2>❤️ Favoritos de {username}</h2>
            <div className='favorites-list'>
                {favorites.map((animal: animal) => (
                    <div className='favorite-item'>
                        <p className='animal-name'>{animal.emoji} {animal.name}</p><p className='raza'>· {animal.breed}</p><button className='close-button'>X</button>
                    </div>
                ))}
            </div>
            <p className='favorites-counter'>{favorites.length} animales guardados</p>
        </aside>
    );
};