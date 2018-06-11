function canGetLicense(licence, age) {
  
   const licenceTypes = ["A", "B", "BE", "C", "D","a","b","be","c","d"];
   const ageReq = [24, 18, 21, 24]; 
   
    let trueValues = 0;
    
    
     if(licenceTypes.indexOf(licence) > -1 ) {
      trueValues++
        } else {
      throw new Error("please enter a valid licenceType")
    }
    

    if(typeof(age) === "number") {
     
    if(age <= 0 && age >= 120) {
     throw new Error("not old enough")
    
    }else{
        trueValues++
    } 
    
   } else {
       throw new Error("enter a number")
   } 
    if(trueValues === 2) {
        return true
    }


}
export {
    canGetLicense
};