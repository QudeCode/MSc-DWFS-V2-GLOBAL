import { products as rawProducts } from "../data/products";
import type { Product } from "../interfaces/Product";

const products: Product[] = rawProducts;

/**
 * Hook para gestionar los productos
 * @param category Categoria para el filtro
 */
export const useProducts = (category?: string): Product[] => {
    // Sin useState porque no vamos a añadir productos
    if(!category) return products

    if(category) return products.filter((product) => product.category === category)
};
