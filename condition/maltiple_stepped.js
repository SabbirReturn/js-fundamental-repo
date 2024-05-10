const shoppingPrice = 4000;
if(shoppingPrice>=5000){
    // 10% discount
    const discount = shoppingPrice * 10/100
    const payAmount = shoppingPrice - discount;
    console.log(payAmount);
}
else if(shoppingPrice>=4000) {
    // 5% discount price
    const discount = shoppingPrice * 5/100;
    const payAmount = shoppingPrice - discount;
    console.log(payAmount);
}
else{
    console.log('Pay full amount');
}