let idCounter = 0;

export class Product {
    constructor(
        modelName,
        brand,
        category,
        description,
        sizes,
        colors,
        price,
        images,
    ) {
        this.id = idCounter++;
        this.modelName = modelName;
        this.brand = brand;
        this.category = category;
        this.description = description;
        this.sizes = sizes;
        this.colors = colors;
        this.price = price;
        this.images = images;
    }
}

export class Brand {
    constructor(name) {
        this.name = name;
    }
}

export class Category {
    constructor(name) {
        this.name = name;
    }
}