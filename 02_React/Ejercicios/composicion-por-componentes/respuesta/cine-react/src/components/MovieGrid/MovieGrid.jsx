import './MovieGrid.css';
import MovieCard from './MovieCard';

export default function MovieGrid() {
  return <section id='movieGrid'>
    <h2 className='movieGridTitle'>🎬 Estrenos de la semana</h2>
    <div className='movies'>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
    </div>
  </section>;
}
