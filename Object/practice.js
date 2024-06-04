const human = {
    name : 'Md Sabbir Hasan',
    identit : 'Bangladdeshi',
    relegion: 'Islam',
    favourite_iteam :{
        food: ['Biriany','Kala vuna','burger'],
        place : ['cox bazar','ranggamati','bandarban'],
        singer : ['Ashes','Zems',],
    }
}
// console.log(human);
human.favourite_iteam.food[0] = 'Sada vat',
console.log(human);
// const keys = Object.keys(human);
const values = Object.values(human);
console.log(values);