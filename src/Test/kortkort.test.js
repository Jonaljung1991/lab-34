import {Körkort} from "../Temp";

describe("LicenceName, () =>{
  test("Checking Licence name", () =>{
    expect(canGetLicense("A", "B","BE","C","D")).toBe(true)
  })
});

describe("LicenceAge, () =>{
  test("Checking Licence age", () =>{
    expect(canGetLicense(21,24,18,24)).toBe(true)
  })
});