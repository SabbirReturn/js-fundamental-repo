let age = 65;
const isStudent = false;
let ticketPrice = 800;
if ( age<10){
    ticketPrice = 0;
}
else if(isStudent===true){
    // 50% discount
    const discountAmount = ticketPrice * 50/100;
    ticketPrice = ticketPrice - discountAmount;
}
else if (age >= 60){
    // 15% Discount
    const discountAmount = ticketPrice * 15/100;
    ticketPrice = ticketPrice - discountAmount;
}
else{
    ticketPrice = 800;
}
console.log(ticketPrice);