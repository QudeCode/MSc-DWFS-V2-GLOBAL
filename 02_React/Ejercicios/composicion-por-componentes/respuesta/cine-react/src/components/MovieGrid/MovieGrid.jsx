import './MovieGrid.css';
import MovieCard from './MovieCard';

export default function MovieGrid({ movies}) {
  return <section id='movieGrid'>
    <h2 className='movieGridTitle'>🎬 Estrenos de la semana</h2>
    <div className='movies'>
      {movies.map((movie) => 
      <MovieCard key={movie.id} movie={movie} />
    )}
    </div>
  </section>;
}
