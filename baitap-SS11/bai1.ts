class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}

const employee = new Employee("Alice", "Company A", "123-456-7890");
employee.printInfo(); // Output: Name: Alice, Company: Company A, Phone: 123-456-7890
const manager = new Manager("Bob", "Company B", "987-654-3210", 5);
manager.printInfo(); // Output: Name: Bob, Company: Company B, Phone: 987-654-3210
console.log("Team size:", manager.teamSize); // Output: Team size: 5