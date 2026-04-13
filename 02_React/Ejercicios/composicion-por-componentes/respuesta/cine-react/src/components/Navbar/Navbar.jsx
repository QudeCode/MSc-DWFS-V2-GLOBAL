import './Navbar.css';

export default function Navbar() {
  return <header className='header'>
  <h1>🎬 CineReact</h1>
  <nav className='navBar'>
    <ul className='navBar_links'>
      <li><a href="">Inicio</a></li>
      <li><a href="">Estrenos</a></li>
      <li><a href="">Géneros</a></li>
      <li><a href="">Contacto</a></li>
    </ul>
  </nav>
</header>
}
