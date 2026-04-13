import './PageLayout.css';
import Sidebar from '../Sidebar/Sidebar';
import MovieGrid from '../MovieGrid/MovieGrid';

export default function PageLayout({ genres, movies, featuredMovie }) {
  return (
  <div className='pageLayout'>
    <Sidebar genres={genres} featuredMovie={featuredMovie}></Sidebar>
    <MovieGrid movies={movies}></MovieGrid>
  </div>
  );
}