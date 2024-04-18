"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(amount) {
        this.speed -= amount;
    }

    speedUp(amount) {
        this.speed += amount;
    }

    showSpeed() {
        console.log(`Current speed of ${this.name}: ${this.speed}`);
    }
}

class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }

    speedUp(amount) {
        super.speedUp(amount);
        console.log(`Speeding up the ${this.name} bicycle by ${amount} km/h.`);
        this.showSpeed();
    }

    slowDown(amount) {
        super.slowDown(amount);
        console.log(`Slowing down the ${this.name} bicycle by ${amount} km/h.`);
        this.showSpeed();
    }

    showSpeed() {
        super.showSpeed();
    }
}

const bicycle = new Bicycle("Giant", 20, 1, 6);
bicycle.speedUp(10); // Tăng tốc độ lên 10 km/h
bicycle.slowDown(5); // Giảm tốc độ xuống 5 km/h