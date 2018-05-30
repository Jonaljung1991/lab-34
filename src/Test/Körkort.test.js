import {canGetLicense} from "../Körkort.js";
describe("LicenceName", () =>{
  test("Checking", () =>{
//      let str = "B"
//      let num = 24
    expect(canGetLicense("B",24)).toBe(true)

  })
});
