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

describe("Bank function testing deposit", () => {
    test("Trying deposit", () => {
        actualBalance = kalle.balance;
        const depositVal = 10;

        deposit(kalle, depositVal);
        expect(kalle.balance).toBe(actualBalance + depositVal);
    })

    test("Trying array", () => {
        expect(() => deposit([1])).toThrow();
    });

    test("Trying wrong object keys", () => {
        expect(() => deposit({
            named: "Kalle",
            balanced: 150
        }, 100)).toThrow();
    });

    test("Trying wrong values", () => {

        expect(() => deposit({
            name: ["hej"],
            balance: 100
        }, 50)).toThrow();
    });
    test("Trying wrong type of amount1", () => {
        expect(() => deposit(kalle, "")).toThrow();
    });

    test("Trying string value amount", () => {
        deposit(greta, "5");
        expect({
            ...greta
        }).toEqual({name: "Greta", balance: 1205});
    })

    test("Trying wrong type of amount2", () => {
        expect(() => deposit(kalle, [])).toThrow();
    });

    test("Trying wrong type of amount3", () => {
        expect(() => deposit(kalle, NaN)).toThrow();
    });

    test("Trying wrong type of amount4", () => {
        expect(() => deposit(kalle, Infinity)).toThrow();
    });

    test("Trying Negative amount", () => {
        expect(() => deposit(kalle, -120)).toThrow();
    });

});

describe("Bank function trying withdraw", () => {

    test("Trying withdraw", () => {
        actualBalance = kalle.balance;
        const withdrawVal = "5";

        withdraw(kalle, withdrawVal);
        expect(kalle.balance).toBe(actualBalance - withdrawVal);

    });

    test("Trying array", () => {
        expect(() => withdraw([1])).toThrow();
    });

    test("Trying wrong object keys", () => {
        expect(() => withdraw({
            named: "Kalle",
            balanced: 150
        }, 100)).toThrow();
    });

    test("Trying wrong values", () => {

        expect(() => withdraw({
            name: ["hej"],
            balance: 100
        }, 50)).toThrow();
    });
    test("Trying wrong type of amount1", () => {
        expect(() => withdraw(kalle, "")).toThrow();
    });

    test("Trying string value amount", () => {

      greta = {
          name: 'Greta',
          balance: 1200
        };

        withdraw(greta, "5");
        expect({
            ...greta
        }).toEqual({name: "Greta", balance: 1195});
    })

    test("Trying wrong type of amount2", () => {
        expect(() => withdraw(kalle, [])).toThrow();
    });

    test("Trying wrong type of amount3", () => {
        expect(() => withdraw(kalle, NaN)).toThrow();
    });

    test("Trying wrong type of amount4", () => {
        expect(() => withdraw(kalle, Infinity)).toThrow();
    });

    test("Trying Negative amount", () => {
        expect(() => withdraw(kalle, -120)).toThrow();
    });

    test("Trying to high amount", () => {
        expect(() => withdraw(kalle, 200)).toThrow();
    })
});

describe("Trying tranfer bank function", () => {
    test("Trying transfer", () => {
        actualBalance = kalle.balance;
        const transferVal = "150";

        transfer(kalle, greta, transferVal);
        expect(kalle.balance).toBe(actualBalance - transferVal)
    })

    test("Trying array", () => {
        expect(() => transfer([1])).toThrow();
    });

    test("Trying wrong object keys", () => {
        expect(() => transfer({
            named: "Kalle",
            balanced: 150
        }, 100)).toThrow();
    });

    test("Trying wrong values", () => {

        expect(() => transfer({
            name: ["hej"],
            balance: 100
        }, 50)).toThrow();
    });
    test("Trying wrong type of amount1", () => {
        expect(() => transfer(kalle, greta , "")).toThrow();
    });


    test("Trying wrong type of amount2", () => {
        expect(() => transfer(kalle, greta ,[])).toThrow();
    });

    test("Trying wrong type of amount3", () => {
        expect(() => transfer(kalle, greta, NaN)).toThrow();
    });

    test("Trying wrong type of amount4", () => {
        expect(() => transfer(kalle,greta, Infinity)).toThrow();
    });

    test("Trying Negative amount", () => {
        expect(() => transfer(kalle, greta, -120)).toThrow();
    });

    test("Trying to high transfer amount", () => {

        expect(() => transfer(kalle, greta ,  200)).toThrow();
    });

})
