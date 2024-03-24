let age = 45;
const isStudent = false;
let ticketPrice = 800;
if ( age<10){
    ticketPrice = 0;
}
else if(isStudent===true){
    // 60% discount
    const discountAmount = ticketPrice * 60/100;
    ticketPrice = ticketPrice - discountAmount;
}
else if (age >= 60){
    // 10% Discount
    const discountAmount = ticketPrice * 10/100;
    ticketPrice = ticketPrice - discountAmount;
}
else{
    ticketPrice = 800;
}
console.log(ticketPrice);