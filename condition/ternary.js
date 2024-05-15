// let price = 500;
// const isLeader = false;
// // if(isLeader === true){
// //     // console.log(price=price);
// // }
// // else{
// //     // 10% vat
// //     let vat = price * 10/100;
// //     let payAmount = price + vat;
// //     // console.log(payAmount);
// // }

// // simple tarnery
// //  structure = (condition) ?  true : false
// price=isLeader===true ?  0: price+1000;
// console.log(price);



// semi advance tarnery
let price = 1000;
const isLeader = false;
// if(isLeader ===true){
//     if(price >=800){
//         price = price /2;
//     }
//     else{
//         price = price
//     }
// }
// else{
//     price = price + 1000;
// }
// console.log(price);

price =isLeader === true ?
        price >= 800? price/2 : price :
    price+1000;
console.log(price);

