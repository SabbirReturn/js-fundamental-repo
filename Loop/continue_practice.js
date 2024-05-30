// .................Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers..............

// let i = 1;
// let sum =0;
// while( i <=40){
//     if(i % 2 ===0){
//         console.log('even num:',i);
//         sum = sum + i;
        
//     }
//     i++
// }
// console.log('sum:',sum);


// ........................display odd number from 55 to 85 and skip the numbers divisible by 5...............

for ( let i = 55; i<85 ; i++){
    if(i % 2 ===0){
        continue;
    }
    if(i % 5 ===0){
        continue;
    }
    console.log(i);
}
 