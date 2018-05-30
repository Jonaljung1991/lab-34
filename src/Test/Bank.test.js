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

        deposit(kalle, depositVal);
        expect(kalle.balance).toBe(actualBalance + depositVal);
    })
    test("Trying withdraw", () => {
        actualBalance = kalle.balance;
        const withdrawVal = "5";

        withdraw(kalle, withdrawVal);
        expect(kalle.balance).toBe(actualBalance - withdrawVal);

    })
    test("Trying transfer" , () =>{
      actualBalance = kalle.balance;
      const transferVal = "150";

      transfer(kalle,greta,transferVal);
      expect(kalle.balance).toBe(actualBalance - transferVal)
    })
})
