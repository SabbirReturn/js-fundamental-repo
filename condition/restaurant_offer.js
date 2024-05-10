const foodPrice = 2400;
const age  = 50;
if(foodPrice> 2000 & age>=60){
    // 50% discount 
    const discount = foodPrice * 50/100;
    const payAmount = foodPrice - discount;
    console.log(payAmount);
}
else if(foodPrice>2000 & age>=50){
    // 40% discount
    const discount = foodPrice * 40/100;
    const payAmount = foodPrice - discount;
    console.log(payAmount);
}
else{
    console.log('Pay full amount');
}