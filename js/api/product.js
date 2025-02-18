const HOST = 'https://dummyjson.com/';

export async function getProducts() {
    const response = await fetch(HOST + "products");

    if (!response.ok) {
        // const error = await response.json();
        throw new Error("Failed to fetch products.");
    }

    const body = await response.json();
    return body.products;
}

export async function getProduct(id) {
    const response = await fetch(HOST + "products/" + id);

    if (!response.ok) {
        // const error = await response.json();
        throw new Error("Failed to fetch product.");
    }

    const product = await response.json();
    return product;
}