import { getProducts } from "../api/product.js";
import { addProductToBasket } from "../components/basket.js";
import { Product } from "../models/product.js";

export let products = [];

function setupHomePage() {
    loadProducts();
}

function loadProducts() {
    const productsItem = localStorage.getItem("products");
    if (productsItem !== null) {
        products = JSON.parse(productsItem);
        renderProducts();
    } else {
        getProducts()
            .then(res => {
                products = res.map(product => new Product(
                    product.id,
                    product.title,
                    product.brand,
                    product.category,
                    product.description,
                    product.price,
                    product.images
                ));

                localStorage.setItem("products", JSON.stringify(products));

                renderProducts();
            })
            .catch(err => console.error(err));
    }
}

function renderProducts() {
    const productList = document.getElementById("product-list-container");
    productList.innerHTML = "";

    for (const product of products) {
        const productLink = document.createElement("a");
        productLink.href = "product.html?productId=" + product.id;

        const article = document.createElement("article");
        article.classList.add("product-item");

        const thumbnail = document.createElement("img");
        thumbnail.src = product.images[0];

        const addToBasketButton = document.createElement("button");
        addToBasketButton.innerText = "Add to basket";

        addToBasketButton.addEventListener('click', event => {
            event.stopPropagation();
            event.preventDefault();
            addProductToBasket(product);
        });

        const informationContainer = document.createElement("div");
        const productTitle = document.createElement("h3");
        productTitle.innerText = product.title;
        const productCategory = document.createElement("span");
        productCategory.innerText = product.category;

        informationContainer.append(productTitle, productCategory);
        article.append(thumbnail, informationContainer, addToBasketButton);
        productLink.append(article);

        productList.append(productLink);
    }
}

setupHomePage();