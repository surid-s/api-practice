console.log("hello from js ");
const user = {id : 22, name: 'Surid', job: 'actor'};
const stringiFied = JSON.stringify(user);
/* console.log(user);
console.log(stringiFied); */

const shopPing = {
    name: 'Alia Road',
    address: 'Mumbai',
    products:['Laptop','DSLR','Apple'],
    owner:{
        name: 'Alia Bhatt',
        profession: 'Actor',
        status: 'Married'
    },
    isEpensive: false
}
const shopString = JSON.stringify(shopPing)
// console.log(shopPing);
console.log(shopString);
const converted = JSON.parse(shopString);
console.log(converted)