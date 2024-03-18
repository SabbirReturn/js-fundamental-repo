const friens =[ 'sabbir','Hasan','Robin'];
let num= 0;
friens.push('Rahman');
const out = friens.pop()
// console.log(out);
// console.log(friens);
// console.log(friens);
// if(friens.includes('Hasan')){
//     console.log('Cholo adda dei');
// }
// else{
//     console.log('Ghumai jai');
// }
for ( const friend of friens){
    console.log(friend);
    console.log('Go to mawya');
    num+=1
    console.log(num)
}