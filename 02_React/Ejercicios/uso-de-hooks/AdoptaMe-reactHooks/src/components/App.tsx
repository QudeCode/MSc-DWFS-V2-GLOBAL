import AnimalGrid from "./AnimalGrid";
import FavoritesSidebar from "./FavoritesSidebar";
import FilterBar from "./FilterBar";
import Header from "./Header";
import RenderCounter from "./RenderCounter";
import './App.css';
import { GlobalContext } from "../context/AppContext";
import { useContext, useEffect, useRef } from "react";

// useEffect sin deps, orquesta todo

export default function App() {
    const { darkMode } = useContext(GlobalContext);
    const renders = useRef(0);

    useEffect(() => {
        renders.current = renders.current + 1;
    });
    
    return (
        <div className={`app ${darkMode ? 'dark-mode' : ''}`} >
            <Header></Header>
            <div className="content">
            <main>
                <FilterBar></FilterBar>
                <AnimalGrid></AnimalGrid>
            </main>
            <FavoritesSidebar></FavoritesSidebar>
            </div>
            <footer>
                <RenderCounter renders={renders.current}></RenderCounter>
            </footer>
        </div>
    );
};