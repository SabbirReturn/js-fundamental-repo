let ticketFare = 800;
var age  = 60;
var isStudent = false;
if(age<10){
    ticketFare = "Free";
}
else if(isStudent===true){
    // 50% discount
    const discountAmount = ticketFare * 50/100;
        ticketFare = ticketFare - discountAmount;
}
else if ( age >= 60){
    // 15% discount
    const discountamount = ticketFare * 15/100;
        ticketFare = ticketFare - discountamount;
}
else{
    ticketFare = 800;
}
console.log(ticketFare);
