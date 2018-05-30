import {deposit, tryAmount, withdraw, transfer, tryObject} from "../Bank";

let kalle = {
    name: 'Kalle',
    balance: 150
};
let greta = {
    name: 'Greta',
    balance: 1200
};
let actualBalance = kalle.balance;

describe("Bank functions testing", () => {
    test("Trying deposit", () => {
        actualBalance = kalle.balance;
        const depositVal = 5;

        expect(tryAmount(depositVal)).toBe(true);
        expect(tryObject(kalle)).toBe(true);
        deposit(kalle, depositVal);
        expect(kalle.balance).toBe(actualBalance + depositVal);
    })
    test("Trying withdraw", () => {
        actualBalance = kalle.balance;
        const withdrawVal = "5";

        expect(tryAmount(withdrawVal)).toBe(true);
        expect(tryObject(kalle)).toBe(true);
        withdraw(kalle, withdrawVal);
        expect(kalle.balance).toBe(actualBalance - withdrawVal);

    })
    test("Trying transfer" , () =>{
      const transferVal = "150";
      actualBalance = kalle.balance;
      expect(tryAmount(transferVal)).toBe(true);
      expect(tryObject(kalle)).toBe(true);
      transfer(kalle,greta,transferVal);
      expect(kalle.balance).toBe(actualBalance - transferVal)
    })
})
