//import { Product } from './product.svelte';

export const load = async(serverLoadEvent) => {
    console.log('Load function called in page.server.js');
    const { fetch } = serverLoadEvent;
    const title = 'List of available products';
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();
    return {
        title,
        products
    };
}