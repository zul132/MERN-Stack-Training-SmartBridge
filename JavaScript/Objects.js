//OBJECTS
/*
    - In JS, objects are powerful data structures that can store key:value pairs
    - For arrays we use [], while for objects we use {}
    - This kind of object creation is called Object Lterals
*/

// Nested Objects
let obj = {
    name: "Tina",
    age: 23,
    rollno: 49,
    address: {
        currentadd: {
            loc: "Hyderabad"
        },
        permanentadd: {
            loc: "Chennai"
        }
    }
}
/*
let obj = {
    name: "Tina",
    age: 23,
    rollno: 49,
    address: "Hyderabad"
}
*/

console.log(obj);
console.log(obj.age);
console.log(obj.address);
console.log(obj.address.permanentadd.loc + "\n");

// Array of Objects
let objs = 
[
    {name: "Fathima", age: 21, rollno: 50},
    {name: "Tina", age: 23, rollno: 49},
    {name: "Bobby", age: 22, rollno: 53},
    {name: "Andrew", age: 21, rollno: 52}
]

let res = objs.map((i) => {
    return i.age > 21
});
console.log(res);


console.log("\n");
// Callback() :- Passing a function as an argument to another function is known as callback function
function fun1(callback) {
    console.log("Hii");
    callback()
}

function fun2(callback) {
    console.log("Fathima");
    callback()
}

function fun3() {
    console.log("How r u?");
}

fun1(function() {
    fun2(fun3)
});

