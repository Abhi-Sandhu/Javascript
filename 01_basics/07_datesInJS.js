let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());


// let createdDate = new Date(2023, 0, 30);
// let createdDate = new Date(2023, 0, 30, 5, 4);
// let createdDate = new Date("2023-01-23")
let createdDate = new Date("12-30-2002")
// console.log(createdDate.toDateString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000));    // divide by 1000 to 
                                                //  convert it to seconds



let newDate = new Date("12-30-2002");
// console.log(newDate.getMonth() + 1);   // +1 because months start from 0 in js

// console.log(newDate.getDay());

console.log(`Today is ${newDate.getDay()} and month is ${newDate.getMonth()+1}` );

newDate.toLocaleString('default' , {
    weekday: "long",
    month: "long", 
})

