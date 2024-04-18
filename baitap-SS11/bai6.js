"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        return `Name: ${this.name}, Price: ${this.price}`;
    }
}

class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getFullDescription() {
        return `${this.getDescription()}, Brand: ${this.brand}`;
    }
}

let electronicProduct = new Electronics("Laptop", 1500, "Dell");
console.log(electronicProduct.getFullDescription()); // Output: Name: Laptop, Price: 1500, Brand: Dell