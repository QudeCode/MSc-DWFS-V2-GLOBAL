import './Navbar.css';

export default function Navbar({ navLinks }) {
  return <header className='header'>
  <h1>🎬 CineReact</h1>
  <nav className='navBar'>
    <ul className='navBar_links'>
    {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
    </ul>
  </nav>
</header>
}
