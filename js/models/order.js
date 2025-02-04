export class Order {
    constructor(items) {
        this.id = Date.now;
        this.items = items;
    }
}

export class OrderItem {
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }
}