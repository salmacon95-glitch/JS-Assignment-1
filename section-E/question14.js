
let lecturersDb = []; 
 
// push() 
lecturersDb.push({ 
    id: "LEC001", 
    fullName: "Amadu Kamara", 
    department: "Software Engineering", 
    phoneNumber: "+232 76 112 233" 
}); 
 
lecturersDb.push({ 
    id: "LEC002", 
    fullName: "Salu Sesay", 
    department: "Networking & Security", 
    phoneNumber: "+232 77 445 566" 
}); 
 
lecturersDb.push({ 
    id: "LEC003", 
    fullName: "Foday Koroma", 
    department: "Database Systems", 
    phoneNumber: "+232 88 778 899" 
}); 
 
// print all lecture 
console.log("All Lecturers:", lecturersDb); 
 
//second lecturer 
console.log(`Second Lecturer: ${lecturersDb[1].fullName} | Phone: 
${lecturersDb[1].phoneNumber}`); 