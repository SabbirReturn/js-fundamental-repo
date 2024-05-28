// ............I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.........

// for( let i =0; i<=60 ; i++){
//     console.log('I will invest at least 6 hrs every single day for next 60 days!', i);
// }


// .............Find all the odd numbers from 61 to 100............

// for(let i =61 ; i<=100 ; i+=2){
//     console.log('odd num:',i);
// }

// .....................Find all the even numbers from 78 to 98............

// for(let i = 78; i<=98; i++){
//     // console.log(i);
//     if(i % 2 ===0){
//         console.log('even num:',i);
//     }
// }

// ..................Display sum of all the odd numbers from 91 to 129................
// let sum = 0;
// for(let i = 91 ; i<129 ; i++){
//     if( i % 2 !==0){
//         console.log(i);
//         sum+=i;
        
//     }
// }
// console.log('sum off all odd number:',sum);

// .....................Display sum of all the even numbers from 51 to 85.................

// let sum =0;
// for(let i = 51; i<=85 ; i++){
//     if( i % 2 ===0){
//         console.log(i);
//         sum+=i;
        
//     }
// }
// console.log('sum of all even number:',sum);

// ........................Generate a multiplication table for number 9...........................
// let num= 9;
// for( let i = 1; i<=10 ; i++){
//     // console.log(i);
//     let result = num * i;
//     console.log(`${num} * ${i} = ${result}`);
// }

// ........................Implement a countdown timer that counts down from 81 to 65............................

// for(let i = 81; i>= 65 ; i--){
//     console.log(i);
// }


let sum =0;
for( let i = 1; i<=20; i++){
    if(i % 3 ===0){
        console.log(i);
        sum+=i;
    }
}
console.log('sum:',sum);