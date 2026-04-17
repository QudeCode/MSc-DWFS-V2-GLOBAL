import './FilterBar.css';

// botones de filtro

export default function FilterBar() {


    return (
        <div className="filter-bar">
            <p>Filtrar por:</p> 
            <ul className="filter-buttons">
                <li><button>Todos</button></li>
                <li><button>Perros</button></li>
                <li><button>Gatos</button></li>
                <li><button>Conejos</button></li>
            </ul>
        </div>
    );
};