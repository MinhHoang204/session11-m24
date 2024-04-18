// Protected:
// protected cho phép các thành viên của lớp con truy cập vào thành viên đó.
// Không thể truy cập từ bên ngoài lớp hoặc lớp con.
// Ví dụ:
class Person1 {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee2 extends Person1 {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    public getDetails(): string {
        return `${this.name} works in ${this.department}`;
    }
}

let emp = new Employee2("Alice", "HR");
console.log(emp.getDetails()); 
console.log(emp.name); 

// Private:
// private không cho phép truy cập từ bất kỳ nơi nào khác ngoài lớp đó.
// Không thể truy cập từ bên ngoài lớp hoặc bất kỳ lớp con nào.
// Ví dụ:
class Person2 {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}

let person2 = new Person2("Alice");
console.log(person.getName()); 
console.log(person.name); 