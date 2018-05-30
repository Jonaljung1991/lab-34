function canGetLicense(licence, age) {
    
    const licenceTypes = ["A", "B", "BE", "C", "D"];
    const ageReq = [24, 18, 21, 24];



  if (typeof(licence) === "string" && typeof(age) === "number") {
      
      if(age >= 0 && age <= 120) {
      
        if (licenceTypes.indexOf(licence) > -1 && ageReq.indexOf(age) > -1) {
        
    
      return true
    } else {

      return false
    }
  }
  }
    
//   if (typeof(licence) !== "string" && typeof(age) !== "number") {
//
//    if (licenceTypes.indexOf(licence) < -1 && ageReq.indexOf(age) < -1) {
//      return alert("please enter correct values")
//    } else {
//
//      return false
//    }
//  }

  throw new Error ("No Licence for you!");
}

export {
  canGetLicense
};
