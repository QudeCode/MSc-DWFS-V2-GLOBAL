import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageLayout from "./components/PageLayout/PageLayout";
import MovieGrid from './components/MovieGrid/MovieGrid';
import { movies, genres } from "./data/movies";
import './App.css'

const navLinks = [
    { label: "Inicio", href: "#" },
    { label: "Estrenos", href: "#" },
    { label: "Géneros", href: "#" },
    { label: "Contacto", href: "#" },
  ];
const year = new Date().getFullYear();

const featuredMovie = movies.find(movie => movie.title === "Dune: Parte III");

export default function App() {
    return (
        <div className="app">
            <Navbar navLinks={navLinks}></Navbar>
            <PageLayout genres={genres} movies={movies} featuredMovie={featuredMovie}>
                <MovieGrid movies={movies}></MovieGrid>
            </PageLayout>
            <Footer year={year}></Footer>
        </div>
    );
}
