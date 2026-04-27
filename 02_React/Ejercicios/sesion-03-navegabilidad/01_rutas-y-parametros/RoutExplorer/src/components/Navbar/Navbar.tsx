import './Navbar.css';
import { useLogger } from '../../hooks/useLogger';
import { Link } from 'react-router-dom';

export default function Navbar() {
    useLogger(Navbar.name)
    
    return (
        <header className={'navbar'}>
            <div className='navbar-content'>
                <h1>🧭 RoutExplorer</h1>
                <nav>
                    <ul className='links'>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">Sobre nosotros</Link></li>
                        <li><Link to="/users">Usuarios</Link></li>
                        <li><Link to="/products">Productos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};