
let hotelRoom = { 
    location: "Aberdeen", 
    pricePerNight: 150, 
    guestName: "Mariama Kamara", 
    nights: 4, 
    amenities: ["Wi-Fi", "AC", "Ocean View", "Breakfast"], 
    bathroom: { 
        count: 1, 
        hasJacuzzi: true 
    } 
}; 
  
console.log("Amenities:", hotelRoom.amenities); 
 
 
console.log("Has Jacuzzi:", hotelRoom.bathroom.hasJacuzzi); 
 
// Calculate total  
let totalBill = hotelRoom.pricePerNight * hotelRoom.nights; 
console.log(` 
==================================== 
        BOOKING SUMMARY CARD 
==================================== 
Guest Name : ${hotelRoom.guestName} 
Location   : ${hotelRoom.location}, Freetown 
Duration   : ${hotelRoom.nights} Nights 
Total Bill : $${totalBill} 
====================================`); 