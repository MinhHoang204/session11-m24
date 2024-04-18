class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
        } else {
            console.log("Vượt quá hạn mức được phép.");
        }
    }
}

// Tạo tài khoản checking và thực hiện rút tiền vượt quá số dư
const checkingAccount = new CheckingAccount("987654321", 1000, 500);
console.log("Số dư trước khi rút:", checkingAccount.balance);
checkingAccount.withdraw(1500);
console.log("Số dư sau khi rút vượt quá số dư:", checkingAccount.balance);
// Thực hiện rút tiền vượt quá hạn mức cho phép
console.log("Số dư trước khi rút quá hạn mức:", checkingAccount.balance);
checkingAccount.withdraw(2000);
console.log("Số dư sau khi rút quá hạn mức:", checkingAccount.balance);