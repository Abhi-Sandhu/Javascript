const marvel_heros = ["Thor", "Ironman", "Hulk"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);  // it will give array inside a array   // wrong practice

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);



//----------------------OR----------------------

// concat method
// console.log(marvel_heros.concat(dc_heros));



//----------------------OR----------------------

// Spread operator
const newArr = [...marvel_heros, ...dc_heros];
// console.log(newArr);



//---------------------Flat method--------------
const anotherArr = [1,2,3,[4,5,6],[7,8,[9,0]]];
const newAnotherArr = anotherArr.flat(Infinity);
// console.log(newAnotherArr);


//-----------------------Array----------------------
console.log(Array.isArray("Hitesh"));      // to check if it is array or not
console.log(Array.from("Hitesh"));         // to convert it to array

console.log(Array.from({name: "Hitesh",}));    // interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2, score3));

