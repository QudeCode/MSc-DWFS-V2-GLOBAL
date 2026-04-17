import { useContext } from 'react';
import { GlobalContext } from '../context/AppContext';
import './Header.css';

export default function Header({ userName }) {
    // consume useContext
    const { toggleDarkMode } = useContext(GlobalContext);

    return (
        <header className="header">
            <h1>🐾 AdoptaMe</h1>
            <p>Encuentra tu compañero ideal</p>
            {userName ? <p>👤 {userName}</p> : ''}
            <button onClick={toggleDarkMode}>☀️/🌙</button>
        </header>
    );
};