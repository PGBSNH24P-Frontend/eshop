import { products } from "../../main.js";

function setupHomePage() {
    renderProducts();
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

        const informationContainer = document.createElement("div");
        const productTitle = document.createElement("h3");
        productTitle.innerText = product.modelName;
        const productCategory = document.createElement("span");
        productCategory.innerText = product.category.name;

        informationContainer.append(productTitle, productCategory);
        article.append(thumbnail, informationContainer);
        productLink.append(article);

        productList.append(productLink);
    }
}

setupHomePage();