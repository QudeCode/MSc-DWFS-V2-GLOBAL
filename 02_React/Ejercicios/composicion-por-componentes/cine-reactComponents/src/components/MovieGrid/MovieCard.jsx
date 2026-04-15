import './MovieCard.css';

export default function MovieCard({ movie }) {
  return <article className='movieCard' id='1'>
    <p className='img'>{movie.image}</p>
    <h3 className='movieCardTitle'>{movie.title}</h3>
    <p>{movie.genre}</p>
    <p>{movie.rating}</p>
    <p>Ver más...</p>
  </article>;
}
