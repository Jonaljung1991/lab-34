import { canGetLicense } from "../Korkort.js";

describe("LicenceName", () =>{
  test("Checking", () =>{

    expect(canGetLicense("B",21)).toBe(true)

  })
});

test("Licence", () => {
    expect(() => canGetLicense([],21)).toThrow()
    
})

test("Licence", () => {
    expect(() => canGetLicense({},129)).toThrow()
    
})

test("Licence", () => {
    expect(() => canGetLicense("F",21)).toThrow()
    
})

test("Licence", () => {
    expect(() => canGetLicense("",-1)).toThrow()
    
})

test("Licence", () => {
    expect(() => canGetLicense(12,"P")).toThrow()
    
})

test("Licence", () => {
    expect(canGetLicense("BE", 24)).toBe(true)
    
})

test("Licence", () => {
    expect(canGetLicense("B", 21)).toBe(true)
    
})

test("Licence", () => {
    expect(() => canGetLicense("D", 20)).toThrow()
    
})

test("Licence", () => {
    expect(() => canGetLicense("A", 19)).toThrow()
    
})