import './RenderCounter.css';

// muestra el contador de renders

export default function  RenderCounter({renders}){
    return (
        <div className="render-counter">
            <p>🔄 Renders del componente raíz: {renders}</p>
        </div>
    );
};