import { useParams } from "react-router-dom";
import { useLogger } from "../hooks/useLogger";

export default function Products() {
    useLogger(Products.name)
    const { productId } = useParams();
    
    return (
        <div className={'products'} >
            <p>productId: {productId}</p>
        </div>
    );
};