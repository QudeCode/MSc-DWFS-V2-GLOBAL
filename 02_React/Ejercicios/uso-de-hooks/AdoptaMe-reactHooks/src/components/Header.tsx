import { useContext } from 'react';
import { GlobalContext } from '../context/AppContext';
import './Header.css';

// consume useContext
const { darkMode, toggleDarkMode } = useContext(GlobalContext);

export default function Header({ userName }) {
    return (
        <header className="header">
            <h1>🐾 AdoptaMe</h1>
            <p>Encuentra tu compañero ideal</p>
            {userName ? <p>👤 {userName}</p> : ''}
            <button onClick={() => toggleDarkMode(darkMode)}>☀️/🌙</button>
        </header>
    );
};