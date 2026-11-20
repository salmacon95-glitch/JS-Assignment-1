
const registeredEmail = "student.dict@limkokwing.edu.sl"; 
const registeredPassword = "ICT2026"; 
 
// Login input 
let inputEmail = "student.dict@limkokwing.edu.sl"; 
let inputPassword = "ICT2026"; 
 
// credentials 
if (inputEmail === registeredEmail && inputPassword === registeredPassword) { 
    console.log("Access Granted: Welcome to the Student Portal"); 
} else { 
    console.log("Access Denied: Invalid email or password"); 
} 