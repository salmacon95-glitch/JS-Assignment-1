
let course = { 
    code: "BSEM2104", 
    title: "Web Development", 
    lecturer: "Amadu Kamara", 
    credits: 3, 
    isCore: true 
}; 
 
console.log("Course Title:", course.title); 
 
//  Update lecturer 
course.lecturer = "Samuel Amkam"; 
 
//  Add new property  
course.room = "Lab 4"; 
 
// update course
console.log("Updated Course Object:", course); 