import './RenderCounter.css';

export default function  RenderCounter(){
    const rendersCount = 0;

    return (
        <div className="render-counter">
            <p>🔄 Renders del componente raíz: {rendersCount}</p>
        </div>
    );
};