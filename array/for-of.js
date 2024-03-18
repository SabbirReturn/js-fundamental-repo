const friends = ['Sabbir','hasan','robin',];
friends.push('misu');
friends.unshift('rahman')
console.log(friends);
// const out1 = friends.pop();
// console.log(friends)
// const out2 = friends.pop();
// console.log(friends);
// console.log(out1,out2)

for(const friend of friends){
    console.log(friend);
    console.log('Go to mawya');
}