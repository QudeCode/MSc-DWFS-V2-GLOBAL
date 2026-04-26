export default function GenreList({ genres }) {
    console.log("genres: ", genres);
  return <section id='genreList'>
    <h3>FILTRAR POR</h3>
    <ul>
        {genres.map((genre) => (
            <li key={genre} className="genre-list__item">
            <span className="genre-list__dot" />
            {genre}
            </li>
        ))}
    </ul>
    </section>;
}
