import { products } from "../../main.js";

const queryParameters = window.location.search;
const querySplit = queryParameters.split("=");
const productId = Number.parseInt(querySplit[1]);
const product = products.find(all => all.id === productId);

let mainImageIndex = 0;
// ?productId=5

function setupProductPage() {
    renderProductImages();
    renderMainImage();
    renderProductInfo();
}

function renderProductImages() {
    const images = document.getElementById("product-images");
    images.innerHTML = "";

    for (let i = 0; i < product.images.length; i++) {
        const imageUrl = product.images[i];
        const image = document.createElement("img");
        image.src = imageUrl;

        images.append(image);

        image.addEventListener('click', () => {
            mainImageIndex = i;
            renderMainImage();
        });
    }
}

function renderMainImage() {
    const imageElement = document.getElementById("main-image");
    imageElement.src = product.images[mainImageIndex];
}

function renderProductInfo() {
    const categoryElement = document.getElementById("product-category");
    const titleElement = document.getElementById("product-title");
    const descriptionElement = document.getElementById("product-description");

    categoryElement.innerText = product.category.name;
    titleElement.innerText = product.modelName;
    descriptionElement.innerText = product.description;
}

setupProductPage();