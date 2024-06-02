// const person = {
//     name : 'Sabbir Hasan',
//     age : 25,
//     isstudent : true,
//     profession : 'Developer',
//     address : ' Uttara',
// }
// // console.log(person);
// // propert access with dot system............

// // const propName = person.profession;
// // console.log(person.profession)
// // console.log(propName);

// // poperty access with braket system................
// const propName = person['profession'];
// console.log(propName);

const computer = {
    monitorName : 'Msi',
    monitorPrice : 10000,
    hdd : '500gb',
    ram : '8gb',
    grapicscard : '2bg',
}
console.log(computer);
// const monitor = computer.monitorPrice;
// console.log(monitor);
// computer.monitorPrice = 90000;
// console.log(computer);

const ssd = computer.hdd;
computer.hdd = '4gb'
console.log(computer);

