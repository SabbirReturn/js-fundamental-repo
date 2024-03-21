// let i = 0;
// for( let i= 0; i<=50; i+=1){
//     // console.log(i);
//     if( i % 5 !==0){
//         continue; 
//     }
//     console.log(i);
// }
for ( let i = 0; i<50; i+=1){
    // console.log(i);
    if(i % 5 ===0){
        continue;
    }
    else{
        if(i>40){
            break;
        }
    }
    console.log(i);
}