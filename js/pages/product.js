import { products } from "../../main.js";

const queryParameters = window.location.search;
const querySplit = queryParameters.split("=");
const productId = Number.parseInt(querySplit[1]);
const product = products.find(all => all.id === productId);

// ?productId=5

function setupProductPage() {
    renderProductImages();
}

function renderProductImages() {
    const images = document.getElementById("product-images");
    images.innerHTML = "";

    for (const imageUrl of product.images) {
        const image = document.createElement("img");
        image.src = imageUrl;

        images.append(image);
    }
}

setupProductPage();