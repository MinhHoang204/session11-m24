"use strict";
class Person1 {
    constructor(name) {
        this.name = name;
    }
}

class Employee2 extends Person1 {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}

let emp = new Employee2("Alice", "HR");
console.log(emp.getDetails()); // Output: Alice works in HR
console.log(emp.name); // Error: Cannot access 'name' because it is protected

class Person2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let person2 = new Person2("Alice");
console.log(person2.getName()); // Output: Alice
console.log(person2.name); // Error: Cannot access 'name' because it is private