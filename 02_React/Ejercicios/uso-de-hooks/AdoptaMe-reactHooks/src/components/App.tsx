import AnimalGrid from "./AnimalGrid";
import FavoritesSidebar from "./FavoritesSidebar";
import FilterBar from "./FilterBar";
import Header from "./Header";
import RenderCounter from "./RenderCounter";
import './App.css';
import type { animal } from "../interfaces/animals";
import { MOCK_DATA } from "../hooks/useAnimals";

const userName: string = "Ada";
const animals = MOCK_DATA;
const favorites: animal[] = animals.filter((animal: animal) => animal.id === "d1" || animal.id === "c2" || animal.id === "r1");

export default function App() {

    return (
        <div className="app">
            <Header userName={userName}></Header>
            <div className="content">
            <main>
                <FilterBar></FilterBar>
                <AnimalGrid animals={animals}></AnimalGrid>
            </main>
            <FavoritesSidebar username={userName} favorites={favorites}></FavoritesSidebar>
            </div>
            <footer>
                <RenderCounter></RenderCounter>
            </footer>
        </div>
    );
};