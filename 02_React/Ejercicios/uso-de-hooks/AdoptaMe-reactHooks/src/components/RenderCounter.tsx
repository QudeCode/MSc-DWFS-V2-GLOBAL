import './RenderCounter.css';

// muestra el contador de renders

export default function  RenderCounter(){
    const rendersCount = 0;

    return (
        <div className="render-counter">
            <p>🔄 Renders del componente raíz: {rendersCount}</p>
        </div>
    );
};