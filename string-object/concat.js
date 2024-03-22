// add two string
const firstName = 'Sabbir';
const lastName = 'Hasan';
const nickName = 'Robin';
// add two string but no white space
const fullName = firstName+lastName;
// system1
const fullName1 = firstName+ ' '+ lastName;
// system2
const fullName2 = firstName.concat(' ').concat(lastName);

// console.log(fullName2);

const text1 = 'Hello';
const text2 = 'world';
// const result = text1 + ' ' + text2;
const result1 = text1.concat(' ').concat(text2)
console.log(result1);