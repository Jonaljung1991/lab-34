import {canGetLicense} from "../Körkort.js";
describe("LicenceName", () =>{
  test("Checking", () =>{

    expect(canGetLicense("B",24)).toBe(true)

  })
});
