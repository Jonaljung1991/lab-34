import {toFahrenheit} from "../Temp";

describe("Temp-to-fahrenheit", () =>{
  test("Trying Temp", () =>{
    expect(toFahrenheit("-273.15")).toBe(true)
  })
});


