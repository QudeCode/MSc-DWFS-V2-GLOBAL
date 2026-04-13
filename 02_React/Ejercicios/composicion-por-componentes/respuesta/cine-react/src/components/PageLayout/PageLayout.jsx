import './PageLayout.css';
import Sidebar from '../Sidebar/Sidebar';
import MovieGrid from '../MovieGrid/MovieGrid';

export default function PageLayout() {
  return (
  <div className='pageLayout'>
    <Sidebar></Sidebar>
    <MovieGrid></MovieGrid>
  </div>
  );
}