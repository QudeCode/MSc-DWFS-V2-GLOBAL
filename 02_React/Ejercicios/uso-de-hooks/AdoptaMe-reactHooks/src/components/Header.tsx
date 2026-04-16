import './Header.css';

export default function Header({ userName }) {
    return (
        <header className="header">
            <h1>🐾 AdoptaMe</h1>
            <p>Encuentra tu compañero ideal</p>
            {userName ? <p>👤 {userName}</p> : ''}
            <button>☀️/🌙</button>
        </header>
    );
};