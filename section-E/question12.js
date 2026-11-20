// mix datatype

let studentProfile = { name: "Foday", age: 34 }; 
let records = [ 
    "DICT Department", 
    2026, 
    true, 
    null, 
    { name: "Samuel", age: 67 }, 
    studentProfile, 
    ["Cassava", "Plantain", "Mango"], 
]; 
 
// index 4
console.log(records[4].name); 
 
// index 5 
console.log(records[5].age); 
 
// array
console.log(records[6][1]); 