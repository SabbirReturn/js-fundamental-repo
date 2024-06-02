const college = {
    name : 'SMC',
    dressColor : 'White',
    result : 'Avarage',
    unique :{
        marit : "top top top",
        sscResult : 'Well',
        possition :{
            ssc : '1st',
            hsc : '2nd',
            celebrate : ['16 december','26march',]
        }
    }
}
college.unique.marit = 'top top most'
// console.log(college.unique.possition.ssc);
college.unique.possition.celebrate.push('14 april') 
// const change = college.unique.possition.push('14 april');
console.log(college.unique.possition.celebrate);
// console.log(change);
console.log(college.unique.marit);