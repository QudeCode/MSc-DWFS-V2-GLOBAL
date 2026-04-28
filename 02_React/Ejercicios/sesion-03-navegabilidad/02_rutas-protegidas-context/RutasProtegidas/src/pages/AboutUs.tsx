import { useLogger } from "../hooks/useLogger";

export default function AboutUs() {
    useLogger(AboutUs.name)
    
    return (
        <div className="aboutUs">
            <h2>Sobre Route-Explorer</h2>
            <section className="aboutUs-content">
                <p>
                Esta aplicación ha sido desarrollada como parte de la asignatura 
                <strong> Desarrollo Web Full Stack (DWFS)</strong> del Máster en Ingeniería 
                Informática de la UNIR.
                </p>
                
                <h3>Objetivo Académico</h3>
                <p>
                El propósito de <em>Route-Explorer</em> es profundizar en la gestión de rutas 
                en el lado del cliente utilizando <strong>React Router</strong>. La actividad 
                se centra en implementar una arquitectura de navegación robusta, explorando 
                conceptos como:
                </p>
                <ul>
                    <li>Rutas anidadas (Nested Routes) y el uso de <code>&lt;Outlet /&gt;</code>.</li>
                    <li>Parámetros de ruta dinámicos (Dynamic Params) para perfiles de usuario.</li>
                    <li>Layouts compartidos y persistencia de componentes globales (Navbar/Footer).</li>
                    <li>Navegación programática y declarativa.</li>
                </ul>

                <h3>Stack Tecnológico</h3>
                <p>
                El proyecto utiliza un enfoque moderno basado en <strong>Vite + React</strong>, 
                con un sistema de estilos basado en variables CSS para facilitar el mantenimiento 
                y la escalabilidad de la interfaz.
                </p>
            </section>
        </div>
    );
};