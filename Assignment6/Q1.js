// Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount{
    constructor(balance, owner){
        this.balance = balance;
        this.owner = owner;
    }
    deposit(amt){
        this.balance = this.balance + amt;
    }
    withdraw(amt){
        this.balance = this.balance - amt;
    }
    displayBalance(){
        return this.balance;
    }
}

const p1 = new BankAccount(100, "ayan");

p1.deposit(10);
console.log(p1.displayBalance());
p1.withdraw(50);
console.log(p1.displayBalance());
