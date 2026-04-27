import { Link } from "react-router-dom";
import { useLogger } from "../hooks/useLogger";

export default function Home() {
    useLogger(Home.name)
    
    return (
        <div className={'home'} >
            <h2>Home</h2>
            <section className="home-content">
                <p>Te puede interesar...</p>
                <ul>
                    <li><Link to="/users/1">Ana García</Link></li>
                    <li><Link to="/users/2">Carlos López</Link></li>
                    <li><Link to="/products/1">Laptop Pro 15</Link></li>
                    <li><Link to="/products/2">Auriculares Bluetooth</Link></li>
                </ul>
            </section>
        </div>
    );
};