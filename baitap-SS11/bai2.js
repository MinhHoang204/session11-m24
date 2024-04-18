"use strict";
class Employee1 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}

class Manager1 extends Employee1 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

const manager1 = new Manager1("Alice", "Company A", "123-456-7890", 5);
manager1.printInfo();