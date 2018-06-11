import {toFahrenheit} from "../Temp";

describe("Temp-to-fahrenheit", () =>{
  test("Trying Temp", () =>{
    /* Test Värden "test" , 5 , null , -274 , ""*/
    let inputVal = 5;
    expect(toFahrenheit(inputVal)).toBe((inputVal * 9/5 + 32))

  });

  test("Trying ( - limit1 )" , () =>{
    expect(toFahrenheit(-273.16)).toBeNaN();
  });

  test("Trying ( - limit2 )" , () =>{
    expect(toFahrenheit(-273.14)).toBe(-273.14 * 9/5 + 32);
  });

  test("trying infinity" , () =>{
    expect(toFahrenheit(Infinity)).toBeNaN();
  });

  test("Trying undefined" , () =>{
      expect(toFahrenheit(undefined)).toBeNaN();
  });

  test("Trying empty string" , () =>{
    expect(toFahrenheit("")).toBeNaN();
  });

  test("Trying null" , () =>{
    expect(toFahrenheit(null)).toBeNaN();
  });

  test("trying object" , () =>{
    expect(toFahrenheit({test:5})).toBeNaN();
  });
});
