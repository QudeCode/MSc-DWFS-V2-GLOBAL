import { Link } from "react-router-dom";
import { useLogger } from "../hooks/useLogger";
import { categories } from "../data/products"

export default function Home() {
    useLogger(Home.name)
    
    return (
        <div className={'home'} >
            <h2>Home</h2>
            <section className="home-content">
                <p>Usuarios relevantes:</p>
                <ul>
                    <li><Link to="/users/1">Ana García</Link></li>
                    <li><Link to="/users/2">Carlos López</Link></li>
                </ul>
                <p>Categorías de productos:</p>
                <ul>
                    {categories.map((category) => {
                        return (
                            <li key={category}><Link to={`products?category=${category}`}>{category}</Link></li>
                        )
                    })}
                </ul>
            </section>
        </div>
    );
};