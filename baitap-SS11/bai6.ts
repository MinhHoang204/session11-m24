class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    public getDescription(): string {
        return `Name: ${this.name}, Price: ${this.price}`;
    }
}

class Electronics extends Product {
    private brand: string;
    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }
    public getFullDescription(): string {
        return `${this.getDescription()}, Brand: ${this.brand}`;
    }
}

let electronicProduct = new Electronics("Laptop", 1500, "Dell");
console.log(electronicProduct.getFullDescription()); // Output: Name: Laptop, Price: 1500, Brand: Dell