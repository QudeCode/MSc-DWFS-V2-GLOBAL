import AnimalGrid from "./AnimalGrid";
import FavoritesSidebar from "./FavoritesSidebar";
import FilterBar from "./FilterBar";
import Header from "./Header";
import RenderCounter from "./RenderCounter";
import './App.css';
import { MOCK_DATA } from "../hooks/useAnimals";
import { GlobalContext } from "../context/AppContext";
import { useContext, useEffect, useRef } from "react";

// useEffect sin deps, orquesta todo

const userName: string = "Ada";
const animals = MOCK_DATA;

export default function App() {
    const { darkMode } = useContext(GlobalContext);
    const renders = useRef(0);

    useEffect(() => {
        renders.current = renders.current + 1;
    });
    
    return (
        <div className={`app ${darkMode ? 'dark-mode' : ''}`} >
            <Header userName={userName}></Header>
            <div className="content">
            <main>
                <FilterBar></FilterBar>
                <AnimalGrid animals={animals}></AnimalGrid>
            </main>
            <FavoritesSidebar username={userName}></FavoritesSidebar>
            </div>
            <footer>
                <RenderCounter renders={renders.current}></RenderCounter>
            </footer>
        </div>
    );
};