import './Sidebar.css';
import GenreList from './GenreList';

export default function Sidebar({ genres, featuredMovie }) {
  return <aside>
    <GenreList genres={genres}></GenreList>

    <section className='featured'>
    <h3>⭐ DESTACADO</h3>
      <article>
        <h4>{featuredMovie.image} {featuredMovie.title}</h4>
        <p>{featuredMovie.genre}
          <span> ⭐ {featuredMovie.rating}</span>
        </p>
      </article>
    </section>
  </aside>;
}
