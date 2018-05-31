import { canGetLicense } from "../Korkort.js";

describe("LicenceName", () =>{
  test("Checking", () =>{

    expect(canGetLicense("B",21)).toBe(true)

  })
});
