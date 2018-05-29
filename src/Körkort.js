let licenceTypes = ["A", "B","BE","C","D"]
let ageReq = [24,18,21,24];

function canGetLicense(licence, age) {

    if(licence === typeof "string" && age === typeof "number") {
        console.log("hej")
        if(licenceTypes.indexOf(licence) > -1 && ageReq.indexOf(age) > -1) {
            return true 
                } else {
            return false

    }   

    } 

}

canGetLicense("B",21)

export {
  canGetLicense
};