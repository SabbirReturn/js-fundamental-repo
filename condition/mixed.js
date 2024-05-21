let friends = ['sabbir','hasan','robin'];
let price = 1000;
let isStudent = false;
if(friends.includes('sabbir')){
    // 50% discount
    let discountAmount = price * 50/100;
    let payAmount = price - discountAmount;
    console.log(payAmount);
    if(isStudent === true){
        // 70% discount
        let discountAmount = price * 70/100;
        let payAmount = price - discountAmount;
        console.log(payAmount);
    }
    else{
        let payAmount = price;
    }
}
else{
    let payAmount = price;
    console.log(payAmount);
}
