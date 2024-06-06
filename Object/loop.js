const mobile = {
    brand : 'Samsung',
    price : 45000,
    screen : 'Ips',
    isNew : true,
}
// console.log(mobile);
// for(const prop in mobile){
//     console.log(prop, ":", mobile[prop]);
//     // console.log(mobile[prop]);
// }

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    // console.log(key);
    console.log(key, ':',mobile[key]);
}