const college ={
    name : 'SMC',
    class : ['11','12'],
    dress : 'White',
    resut : 'Top top top',
    celebrate : ['16 december','14 april']
}
const change = college.celebrate[0];
college.celebrate[0] = '26 march';

console.log(college);
// const keys = Object.keys(college);
// console.log(keys);
console.log(Object.values(college));

