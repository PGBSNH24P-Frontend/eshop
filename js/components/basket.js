import { Basket, BasketItem } from "../models/basket.js";

const basketWrapper = document.getElementsByClassName("basket-wrapper")[0];
const basketItemsElement = document.getElementById("basket-items");
const basketClearButton = document.getElementById("basket-clear-button");
const basket = new Basket();

function setupBasket() {
    const basketOpenButton = document.getElementById("basket-open-button");
    const basketCloseButton = document.getElementById("basket-close-button");

    basketOpenButton.addEventListener("click", toggleBasket);
    basketCloseButton.addEventListener("click", toggleBasket);

    document.body.addEventListener("click", () => {
        if (basketWrapper.classList.contains("basket-visible")) {
            basketWrapper.classList.remove("basket-visible");
        }
    });

    basketWrapper.addEventListener("click", event => event.stopPropagation());

    basketClearButton.addEventListener("click", () => {
        basket.items = [];
        renderBasketItems();
    });
}

export function addProductToBasket(product) {
    const existing = basket.items.find(all => all.product.id == product.id);
    if (existing !== undefined) {
        existing.amount++;
        renderBasketItems();
        return;
    }

    const basketItem = new BasketItem(product, 1);
    basket.items.push(basketItem);
    renderBasketItems();
}

function renderBasketItems() {
    basketItemsElement.innerHTML = "";

    for (const basketItem of basket.items) {
        const article = document.createElement("article");
        article.classList.add("basket-item");

        const amountSpan = document.createElement("span");
        const modelSpan = document.createElement("span");
        const priceSpan = document.createElement("span");

        amountSpan.innerText = basketItem.amount + "x";
        modelSpan.innerText = basketItem.product.modelName;
        priceSpan.innerText = "$" + (basketItem.product.price * basketItem.amount);

        const incAmountButton = document.createElement("button");
        const decAmountButton = document.createElement("button");
        const removeButton = document.createElement("button");

        incAmountButton.innerText = "+";
        decAmountButton.innerText = "-";
        removeButton.innerText = "X";

        incAmountButton.addEventListener("click", () => {
            basketItem.amount++;
            renderBasketItems();
        });

        decAmountButton.addEventListener("click", () => {
            basketItem.amount--;
            if (basketItem.amount <= 0) {
                basket.items = basket.items.filter(item => item.product.id !== basketItem.product.id);
            }

            renderBasketItems();
        });

        removeButton.addEventListener("click", () => {
            basket.items = basket.items.filter(item => item.product.id !== basketItem.product.id);
            renderBasketItems();
        });

        article.append(amountSpan, modelSpan, priceSpan, incAmountButton, decAmountButton, removeButton);

        basketItemsElement.append(article);
    }
}

function toggleBasket(event) {
    event.stopPropagation();
    basketWrapper.classList.toggle("basket-visible");
}

setupBasket();