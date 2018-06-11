function canGetLicense(licence, age) {
  
   const licenceTypes = ["A", "B", "BE", "C", "D","a","b","be","c","d"];
   const ageReq = [24, 18, 21, 24]; 
   if(typeof(licence) != "string") {
  console.log("Please enter a string") 
  return false
} else {
  if(licenceTypes.indexOf(licence) > -1 ) {
      console.log("workss")
    } else {
      throw new Error("please enter a valid liceneType")
      return false
    }
  if(licence === "A" && licence === "a") {
    console.log(24)
  }
  if(licence === "B" && licence === "b") {
    console.log(18)
  }
  if(licence === "BE" && licence === "be") {
    console.log(18)
  }
  if(licence === "C" && licence === "c") {
    console.log(21)
  }
  if(licence === "D" && licence === "d") {
    consolel.log(24)
  } else {
    
  if(typeof(age) != "number") {
     
     throw new Error("Please enter a number")
      return false
    } else {
      if(age <= 0 && age < 18) {
     throw new Error("not old enough")
    
    }
    if(age >= 18 && age < 21) {
      console.log("B,BE")
    }
    if(age === 21) {
      console.log("B,BE + C")
    }
    if(age === 22 ) {
      console.log("B,BE,C")
    } 
    if(age === 23 ) {
      console.log("B,BE,C")
    }
    if(age === 24 ) {
      console.log("B,BE,C + A + D")
    }
    if(age >= 120 && age > 24) {
      console.log("ALL LICENCES:B,BE,C,A,D")
    }
    if(age > 120)
      throw new Error("to high")
    }
   }  
    return true

}
  return true
   
}



export {
    canGetLicense
};