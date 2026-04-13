import "./Sidebar.css";

export default function GenreList({ genres }) {
  return (
    <ul className="genre-list">
      {genres.map((genre) => (
        <li key={genre}>
          {genre}
        </li>
      ))}
    </ul>
  );
}
