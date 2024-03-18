// const age = 8;

// if ( age>=18){
//     console.log('Vote dite jao');
// }
// else{
//     console.log(' Ghumai Thako');
// }
// simple ternary
// age>=18 ? console.log('Vote dite jao') : console.log('Ghumai thako');

// semi-complex ternary

// let price = 500;
// const isLeader = false;
// price =isLeader == true ? 0  : price+100;
// console.log(price);

let price = 1500;
const isLeader = false;
// if (isLeader==true){
//     if (price> 1000){
//         price = price /2;
//     }
//     else{
//         price= 0;
//     }
// }
// else{
//     price = price + 100;
// }
// console.log(price);


price=isLeader==true ?
     price>1000 ? 
        price/2 : 0 : 
    price +100;
console.log(price);



// logical not operator

// const isPassed = false;

// if ( isPassed){
//     console.log('porba');
// }
// else{
//     console.log('Biya');
// }


