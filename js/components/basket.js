import { Basket, BasketItem } from "../models/basket.js";

const basketWrapper = document.getElementsByClassName("basket-wrapper")[0];
const basketItemsElement = document.getElementById("basket-items");
const basketClearButton = document.getElementById("basket-clear-button");

const basketItem = localStorage.getItem("basket");
let basket = new Basket();
if (basketItem !== null) {
    basket = JSON.parse(basketItem);
}

function setupBasket() {
    const basketOpenButton = document.getElementById("basket-open-button");
    const basketCloseButton = document.getElementById("basket-close-button");

    // Öppna eller stäng basket vid knapptryck
    basketOpenButton.addEventListener("click", toggleBasket);
    basketCloseButton.addEventListener("click", toggleBasket);

    // Stäng basket om man trycker utanför och den är öppen
    document.body.addEventListener("click", () => {
        if (basketWrapper.classList.contains("basket-visible")) {
            basketWrapper.classList.remove("basket-visible");
        }
    });

    // Förhindra att basket stängs om man trycker innanför basket boxen
    basketWrapper.addEventListener("click", event => event.stopPropagation());

    // Rensa alla basket items
    basketClearButton.addEventListener("click", () => {
        basket.items = [];
        saveBasketToLocalStorage();
        renderBasketItems();
    });

    renderBasketItems();
}

// Lägger till en produkt i basket och visar upp dem
export function addProductToBasket(product) {
    // Kolla först om produkten finns redan
    //  och öka i antal istället i så fall
    const existing = basket.items.find(all => all.product.id == product.id);
    if (existing !== undefined) {
        existing.amount++;
        saveBasketToLocalStorage();
        renderBasketItems();
        return;
    }

    const basketItem = new BasketItem(product, 1);
    basket.items.push(basketItem);
    saveBasketToLocalStorage();
    renderBasketItems();
}

function saveBasketToLocalStorage() {
    localStorage.setItem("basket", JSON.stringify(basket));
}

// Renderar ut (visar) alla basket items i basket boxen
function renderBasketItems() {
    // Töm först gammal data
    basketItemsElement.innerHTML = "";

    // Loopa igenom alla basket items
    for (const basketItem of basket.items) {
        const article = document.createElement("article");
        article.classList.add("basket-item");

        // Element för att visa informatin om produkt
        const amountSpan = document.createElement("span");
        const modelSpan = document.createElement("span");
        const priceSpan = document.createElement("span");

        amountSpan.innerText = basketItem.amount + "x";
        modelSpan.innerText = basketItem.product.title;
        priceSpan.innerText = "$" + (basketItem.product.price * basketItem.amount).toFixed(2);

        const incAmountButton = document.createElement("button");
        const decAmountButton = document.createElement("button");
        const removeButton = document.createElement("button");

        incAmountButton.innerText = "+";
        decAmountButton.innerText = "-";
        removeButton.innerText = "X";

        // Click listener för att öka antal produkter
        incAmountButton.addEventListener("click", () => {
            basketItem.amount++;
            saveBasketToLocalStorage();
            renderBasketItems();
        });

        // Click listener för att minska antal produkter
        decAmountButton.addEventListener("click", () => {
            basketItem.amount--;
            if (basketItem.amount <= 0) {
                basket.items = basket.items.filter(item => item.product.id !== basketItem.product.id);
            }

            saveBasketToLocalStorage();

            renderBasketItems();
        });

        // Click listener för att ta bort produkt från basket
        removeButton.addEventListener("click", () => {
            basket.items = basket.items.filter(item => item.product.id !== basketItem.product.id);
            saveBasketToLocalStorage();
            renderBasketItems();
        });

        article.append(amountSpan, modelSpan, priceSpan, incAmountButton, decAmountButton, removeButton);

        // Lägg in basket item element på sidan
        basketItemsElement.append(article);
    }
}

// Öppna eller stäng basket
function toggleBasket(event) {
    event.stopPropagation(); // Förhindra att andra listeners aktiveras
    basketWrapper.classList.toggle("basket-visible");
}

setupBasket();