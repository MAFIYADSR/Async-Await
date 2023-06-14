console.log('person1: shows tickit');
console.log('person2: shows tickit');

const preMovie = async () => {

const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('tickit'), 3000);

})

const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
const getCandy = new Promise((resolve, reject) => resolve(`candy`));
const getCoke = new Promise((resolve, reject) => resolve(`coke`));

let tickit = await promiseWifeBringingTicks;
let[popcorn,candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke])

console.log(`${popcorn}, ${candy}, ${coke}`);

return tickit;
}


preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows tickit');
console.log('person5: shows tickit');4