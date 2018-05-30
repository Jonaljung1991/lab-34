let licenceTypes = ["A", "B", "BE", "C", "D"];
let ageReq = [24, 18, 21, 24];

function canGetLicense(licence, age) {


  if (typeof(licence) === "string" && typeof(age) === "number") {

    if (licenceTypes.indexOf(licence) > -1 && ageReq.indexOf(age) > -1) {
      return true
    } else {

      return false
    }
  }

  throw "No Licence for you!";
}
export {
  canGetLicense
}
