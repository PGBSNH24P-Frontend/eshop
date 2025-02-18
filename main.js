/*

addToBasket
filtrering av produkter (3 funktioner?)
sign in, sign up
söka
visa produkter
olika vyer varukorg eller inte, markering om produkt ligger i varukorg
välja färg och storlek på produkter
validering för formulär
visa varukorg
räkna totalt pris på varukorg produkter
visa fler produkter
visa rekommenderade produkter
review på produkter
visa antal produkter i varukorg

klasser:
- användare
- märke
- beställning
- produkter
- varukorg
- kategori

variabler:
- lista på produkter
- varukorg

*/

import { getProducts } from "./js/api/product.js";
import { Product } from "./js/models/product.js";

/*export let products = [];

function main() {
    getProducts()
        .then(res => products = res.map(product => new Product(
            product.id,
            product.title,
            product.brand,
            product.category,
            product.description,
            product.price,
            product.images
        )))
        .catch(err => console.error(err));
}

main();
*/