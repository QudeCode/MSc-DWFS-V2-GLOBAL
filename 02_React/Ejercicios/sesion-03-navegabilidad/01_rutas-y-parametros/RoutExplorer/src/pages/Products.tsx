import { useSearchParams } from "react-router-dom";
import { useLogger } from "../hooks/useLogger";

export default function Products() {
    useLogger(Products.name)
    const [ params ] = useSearchParams();
    
    return (
        <div className={'products'} >
            <p>params: {params.toString()}</p>
        </div>
    );
};