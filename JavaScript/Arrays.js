// ARRAYS
let num = [4,8,2,5,9,"Smart Bridge","Fathima",true,undefined]
console.log(num);    
console.log(num[1]);    
console.log(num.length + "\n");


let num1D = [4,8,2,5,9]
console.log(num1D)
console.log(num1D.length + "\n")

// Multi dimensional arrays
let num2D = [4,8,2,[5,45,9]]
console.log(num2D[3] + "\n");

let num3D = [4,8,2,[5,45,9,[3,5,9]]]
console.log(num3D[3][3]);
console.log(num3D[3][3][2] + "\n");

let x = [4,6,8,2,9]
/* 
    JS ARRAY FUNCTIONS
    x.push(2)
    x.pop()
    x.shift()
    x.unshift(5)
    x.slice(2,4)
*/

// JS CALLBACK FUNCTIONS

// Iteraying through the array using forEach() method
// Performs the specified action for each element in an array.
let res1 = x.forEach((X) => {
    console.log(X);
})
console.log("\n");

let res2 = x.forEach((X) => {
    console.log(X + 2);
})
console.log("\n");


/* map() is very similar to forEach() except that it creates a new array rather than performing on the same array */
/* Calls a defined callback function on each element of an array, and returns an array that contains the results. */
let res3 = x.map((X) => {
    console.log(X);
})
console.log("\n");

/* Returns the elements of an array that meet the condition specified in a callback function. */
let res4 = x.filter((i) => {
    return i > 6
})
// res4 will contain all the elements of x that are greater than 6
console.log(res4); 