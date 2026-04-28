import { useSearchParams } from "react-router-dom";
import { useLogger } from "../hooks/useLogger";
import { useProducts } from "../hooks/useProducts";

export default function Products() {
    useLogger(Products.name)
    const [ params ] = useSearchParams();
    const filteredParams = params.get("category");

    const products = useProducts(filteredParams);
    return (
        <div className={'products-container'} >
            <h2>Products</h2>
            <section className={'products-content'} >
                {products ? products.map((product) => {
                    return (
                        <div key={product.id} className={`product-card product-${product.id}`}>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-category">Categoria: {product.category}</p>
                            <p className="product-price">Precio: {product.price}€</p>
                        </div>
                    )
                }) : ''}
            </section>
        </div>
    );
};