import {toFahrenheit} from "../Temp";

describe("Temp-to-fahrenheit", () =>{
  test("Trying Temp", () =>{
    /* Test Värden "test" , "5" , null , -274 ,*/
    let inputVal = 5;
    expect(toFahrenheit(inputVal)).toBe((inputVal * 9/5 + 32))
  })
});
