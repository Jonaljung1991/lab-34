function canGetLicense(licence, age) {
  
   const licenceTypes = ["A", "B", "BE", "C", "D","a","b","be","c","d"];
   const req = [
       {
        type: "a",
        age: 24
    },{
        type: "b",
        age: 18
    },{
        type: "be",
        age: 18
    },{
       type: "c",
        age: 21
    },{
        type: "d",
        age: 24
    }
       
    ]
   
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
        for(let i = 0; i < req.length; i++){
        
            if(req[i].type === licence  || (req[i].type.toUpperCase()) === licence ){
                console.log(req[i].type.toUpperCase())
                if(age >= req[i].age){
                     trueValues++
                }
            }        
        }
       
        
    } 
    
   } else {
       throw new Error("enter a number")
   } 
    if(trueValues === 2) {
        return true
    }else{
        throw new Error ("no licence")
    }


}
export {
    canGetLicense
};