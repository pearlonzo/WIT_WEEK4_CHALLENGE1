const Bankaccount = require('./Bankaccount');
describe(Bankaccount, () => {
   it('should call the class constructor', () => {
       expect(Bankaccount).toBeTruthy();
   });
   it('Should return Initial deposit if opening bank account', () => {
       const mimiAccount = new BankAccount('Active',5000);
       expect(mimiAccount.open()).toBe(5000)
   });
   it('Should return current balance if account is open', () => {
    const shamAccount = new BankAccount('Active',6000,'open');
    expect(shamAccount.getBalance()).toBe(6000)
});
   it('Should return new balance after deposit if account is open', () => {
       const mimiAccount= new Bankaccount('Active',50000);
       expect(mimiAccount.deposit(300000)).toBe(250000)
   });
   it('Should return The account is deactivated if account is closed', () => {
       const mimiAccount = new Bankaccount('deactive',3000,'closed');
       expect(mimiAccount.deposit(20000)).toBe('The account is deactivated')
   });
   it('Should return new balance after withdraw if account is open and amount is less than balance', () => {
       const mimiAccount = new Bankaccount('Active',6000,'open');
       expect(mimiAccount.withdraw(2000)).toBe(4000)
   });
   it('Should return Account has been closed if account is closed', () => {
       const newaccount = new Bankaccount('deactive',4000,'closed');
       expect(newaccount.close()).toBe('account has been closed')
   });
})