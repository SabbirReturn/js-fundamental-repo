const price = 3500;
const age = 55;

if (age<=12){
    console.log('Free Food');
}
else if(age>=60){
    // 50% discount
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if( price >=3000 & age<40){
    // 10% discount
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
 else if( age<=50){
    // 30% discount
    const discount = price * 30/100;
    const payAmount = price - discount;
    console.log(payAmount);
 }
 else if( age<60){
    // 40% discount
    const discount = price * 40/100;
    const payAmount = price - discount;
    console.log(payAmount);
 }
else{
    console.log(price);
}
