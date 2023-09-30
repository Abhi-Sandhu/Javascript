// let arr = [2,3,4,5,6];
// console.log(arr);
// console.log(arr[3]);



// -----------------Array declaration

// const arr1 = [0, 2, true, "Hello", 67.4]
// console.log(arr1);
//                 // OR
// const arr2  = new Array(0, 2, true, "Hello", 67.4);
// console.log(arr2);



// ------------------Array Methods
let arr = [1,2,3,4,5,6];

// arr.push(7);
// console.log(arr);

// arr.pop();
// console.log(arr);


// console.log(arr);
// arr.unshift("Hello");
// console.log(arr);


// console.log(arr);
// arr.shift();
// console.log(arr);


// console.log(arr.includes(5));
// console.log(arr.includes(9));


// console.log(arr.indexOf(5));
// console.log(arr.indexOf(8));          // -1 because it does not exist


// let newArr = arr.join();              // it converts arra to string
// console.log(newArr);
// console.log( typeof newArr);


// ----------------Slice (it do not changes the original array)
console.log("A" , arr);
console.log(arr.slice(1,3));        // last range is excluded
console.log(arr);


//-----------------splice   (it changes the original array)
console.log("B", arr);
console.log(arr.splice(1,3));       // last range is included
console.log(arr);







