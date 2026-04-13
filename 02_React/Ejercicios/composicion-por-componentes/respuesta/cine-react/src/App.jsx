import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageLayout from "./components/PageLayout/PageLayout";
import { movies, genres } from "./data/movies";
import './App.css'

const featuredMovie = movies.find(movie => movie.title === "Dune: Parte III");

export default function App() {
    return (
        <div className="app">
            <Navbar></Navbar>
            <PageLayout genres={genres} movies={movies} featuredMovie={featuredMovie}></PageLayout>
            <Footer></Footer>
        </div>
    );
}
