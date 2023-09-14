console.log(2 < 2);
console.log(2 > 2);
console.log(2 <= 2);
console.log(2 >= 2);
console.log(2 == 2);
console.log(2 != 2);


// Strict checking:
     console.log("2" == 2);   // true because of type conversion 
     console.log("2"===2);    // false due to no type conversion



// Wrong Practices:

    // console.log("2" > 1);
    // console.log("02" > 1);





    // console.log(null == 0);
    // console.log(null > 0);
    // console.log(null >= 0);     // it is due to the fact that the comparison (<,>,>=,etc) works 
                                   // differently than assignment (==)




    // console.log(undefined > 0);
    // console.log(undefined == 0);
