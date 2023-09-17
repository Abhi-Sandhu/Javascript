// # Primitive (call by value)

//    7 types  => String, Number, null, Boolean, undefined, 
//                Symbol, BigInt

const score = "100"
const scoreValue = 100
const outsideTemp = null
const isLoggedIn = true
let userEmail;

let id = Symbol("123");   // for uniqueness
let anotherId = Symbol("123");
// console.log(id === Symbol);


let Bignumber = 35423468264238n; 



// # Reference or Non-primitive (call by reference):

//    Array, objects, functions

let heroes = ["Shaktiman", "naagraj", "doga"];
// console.log(heroes);


let details = {
    name: "Hitesh",
    age: 22
};
// console.log(details);


const func = function() {
    console.log("Hello World");
}
// func();





// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof outsideTemp);
// console.log(typeof isLoggedIn);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof Bignumber);
// console.log(typeof heroes);
// console.log(typeof details);
// console.log(typeof func);





// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function   (object-Function)
//        Object  =>  object







// ++++++++++++++++ Memory Allocation ++++++++++++++++++

// Stack (primitive)  ,  Heap (Non-primitive)


// Stack
let myName = "Abhi Sandhu";
let myNikName = myName;

myNikName = "Kyromx"
// console.log(myName);
// console.log(myNikName);



// Heap
let userOne = {
    email: "user@gmail.com",
    upi: "hitesh@ybl"
}

let userTwo = userOne;
userTwo.email = "user2@google.com";

console.log(userOne.email);
console.log(userTwo.email);

