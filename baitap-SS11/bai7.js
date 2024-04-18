"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Không đủ tiền trong tài khoản để rút.");
        } else {
            this.balance -= amount;
        }
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest() {
        return (this.balance * this.interestRate) / 100;
    }
}

// Tạo tài khoản tiết kiệm và in ra tiền lãi hàng tháng
const savingsAccount = new SavingsAccount("123456789", 1000, 0.05);
console.log("Tiền lãi hàng tháng:", savingsAccount.calculateInterest());
// Gửi thêm tiền vào tài khoản và in ra tiền lãi hàng tháng sau khi gửi
savingsAccount.deposit(500);
console.log("Tiền lãi hàng tháng sau khi gửi thêm tiền:", savingsAccount.calculateInterest());