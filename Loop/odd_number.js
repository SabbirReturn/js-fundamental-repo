let num = 1;
let sum = 0;
while(num<20){
    // console.log(num);
    if(num % 2 !==0){
        console.log('odd number',num);
        sum = sum + num;
        console.log('sum:',sum);
    }
    num++
}