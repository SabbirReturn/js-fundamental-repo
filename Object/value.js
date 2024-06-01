const person = {
    name : 'Sabbir Hasan',
    age : 25,
    isstudent : true,
    profession : 'Developer',
    address : ' Uttara',
    'fav place' : ['Coxs Bazar','Sundarbon','Ranggamati']
}
person.age = 30;
person['fav place'] = ['Bandarban', 'Ranggamari']
const keyName = person.profession;
console.log(keyName);

person['profession'] = 'Devops';
console.log(person);
console.log(person['profession']);