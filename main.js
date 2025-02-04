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

import { Brand, Category, Product } from "./js/models/product.js";

export const BRAND_SALT = new Brand("Salt");

export const CATEGORY_SEXBOMB = new Category("Sexbomb");

export let products = [
    new Product("Burnikk", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
    new Product("Kibal Batal", BRAND_SALT, CATEGORY_SEXBOMB, "ABC", [28, 36, 42], ["#FFFFFF", "#000000"], 240, ["https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df", "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"]),
];

function main() { }

main();
