let username = "lecturer_dict"; 
let pin = "2026"; 
 
// datatype missmatch
console.log(username === "lecturer_dict" && pin === 2026); 
 
// first and second condition
console.log(username === "student_dict" || pin === "2026"); 
 
// user name is not admin   
console.log(!(username === "admin")); 
