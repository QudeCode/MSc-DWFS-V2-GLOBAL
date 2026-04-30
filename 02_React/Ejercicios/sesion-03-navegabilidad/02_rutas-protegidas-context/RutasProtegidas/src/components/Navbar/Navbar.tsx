import './Navbar.css';
import { useLogger } from '../../hooks/useLogger';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {
    useLogger(Navbar.name)
    const { user } = useContext(AuthContext)
    
    return (
        <header className={'navbar'}>
            <div className='navbar-content'>
                <h1>🧭 RoutExplorer</h1>
                <nav>
                    <ul className='links'>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">Sobre nosotros</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        { user ? 
                            <li><Link to="/userProfile">👤 {user.name}</Link></li>
                            : 
                            <li><Link to="/login">🔒 Login</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};