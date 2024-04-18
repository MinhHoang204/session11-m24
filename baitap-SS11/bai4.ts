class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    protected slowDown(amount: number): void {
        this.speed -= amount;
    }

    protected speedUp(amount: number): void {
        this.speed += amount;
    }

    protected showSpeed(): void {
        console.log(`Current speed of ${this.name}: ${this.speed}`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    speedUp(amount: number): void {
        super.speedUp(amount);
        console.log(`Speeding up the ${this.name} bicycle by ${amount} km/h.`);
        this.showSpeed();
    }

    slowDown(amount: number): void {
        super.slowDown(amount);
        console.log(`Slowing down the ${this.name} bicycle by ${amount} km/h.`);
        this.showSpeed();
    }

    showSpeed(): void {
        super.showSpeed();
    }
}

const bicycle = new Bicycle("Giant", 20, 1, 6);
bicycle.speedUp(10); // Tăng tốc độ lên 10 km/h
bicycle.slowDown(5); // Giảm tốc độ xuống 5 km/h