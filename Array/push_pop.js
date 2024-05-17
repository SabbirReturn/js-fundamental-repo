const friends = ['Sabbir','Hasan','Robin','Mahfuza','Misu'];
console.log(friends);

// ....................push.......................
// friends.push('Akter');
const addFriend = friends.push('Akter');
console.log(friends);
// console.log(addFriend);

// ...........pop......................
const out1 = friends.pop();
const out2 = friends.pop();
const fullName = out2 + "" + out1;
console.log(friends);
console.log(out1,out2);
console.log(fullName);