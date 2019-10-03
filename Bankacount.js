class BankAccount {
    constructor(status, balance) {
        this.balance = balance;
        this.status = status;
     

    }

    getBalance() {
        if (this.balance <= 6000 (this.status = active)) {
            this.balance == amount ;
            return  ' this.acount balance';
        } else {
            return `account is inactive`;
        }
    }

    open() {
        balance == 6000
        status == 'Active'
        
    }

    deposit(amount){
        if(status !== 'Active'){
            return 'The account is deactivated'
        }else{
            return this.balance += amount
        }
        
    }

    withdraw() {
        this.status = 'active';
        if(this.balance - cashwithdrawn){
            return 'withdraw successful';
        }else{
            return 'you have insufficient balance';
        }
    }

    close(){
        this.balance = 6000;
        if (this.balance > 6000){
            return 'your account is not active';
        }


    }
}
// var PearlonzoAccount = new Bankaccount('status',6000)
// PearlonzoAccount.open()
module.exports =Bankaccount;