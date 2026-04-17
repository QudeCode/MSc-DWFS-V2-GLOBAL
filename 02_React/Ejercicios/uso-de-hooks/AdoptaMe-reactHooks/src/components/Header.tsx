import { useContext } from 'react';
import { GlobalContext } from '../context/AppContext';
import './Header.css';

import { userName } from '../context/AppContext';

export default function Header() {
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