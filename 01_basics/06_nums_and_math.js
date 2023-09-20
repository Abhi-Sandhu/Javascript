const score = 500
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const newNumber = 23.44565
// console.log(newNumber.toPrecision(4));   // gives the precise value

const Hundreds = 1000000
// console.log(Hundreds.toLocaleString('en-IN'));



// ************************** Maths *****************************
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.min(4, 43, 5,6 ,9));
// console.log(Math.max(4, 43, 5,6 ,9));

console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1) + min));   // general formula
