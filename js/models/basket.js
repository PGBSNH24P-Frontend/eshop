export class Basket {
    constructor() {
        this.items = [];
    }
}

export class BasketItem {
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }
}