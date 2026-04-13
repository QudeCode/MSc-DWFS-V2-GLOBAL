import './Sidebar.css';

export default function Sidebar() {
  return <aside>
    <section className='filter'>
    <h3>FILTRAR POR</h3>
    <ul>
      <li><a href="">Acción</a></li>
      <li><a href="">Comedia</a></li>
      <li><a href="">Drama</a></li>
      <li><a href="">Terror</a></li>
      <li><a href="">Sci-Fi</a></li>
    </ul>
    </section>

    <section className='featured'>
    <h3>⭐ DESTACADO</h3>
      <article>
        <h4>🏜️ Dune: Parte III</h4>
        <p>Sci-Fi · ⭐ 9.0</p>
      </article>
    </section>
  </aside>;
}
