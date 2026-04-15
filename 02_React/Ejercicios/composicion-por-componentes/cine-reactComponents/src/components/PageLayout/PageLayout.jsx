import './PageLayout.css';
import Sidebar from '../Sidebar/Sidebar';

export default function PageLayout({ genres, featuredMovie, children }) {
  return (
  <div className='pageLayout'>
    <Sidebar genres={genres} featuredMovie={featuredMovie}></Sidebar>
    {/* error grabe: no poner main */}
    <main className="main">{children}</main> 
  </div>
  );
}