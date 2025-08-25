/////////Function Declarations////////////
function doSomething(x) {
    const y = x + 1;
    console.log(y);
}
console.log(doSomething(97));

/////////Function Expressions////////////
const dosomething3 = function () {
    return x + 1;
}

/////////Arrow Function Expressions///////
const dosomething2 = (x) => {
    return x + 1;
}

////////Passing Functions as Parameters (Higher-Order Functions)////////
function doSomething4(n1, n2) {
    const result = n1 + n2;
    return result;
}
function doDo(number){
    const dd = doSomething4(3, 4) + number;
    return dd;
}
console.log(doDo(18)); // 25

////////Functions Returning Functions////////
function Test(x) {
    return x;
}
function Test2(x) {
    return x + 50;
}
console.log(Test(Test2)(10)); // 60

////////Using the arguments object////////
function doSomething5(a, b, c){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(a, b, c);
}
console.log(doSomething5(1, 2, 3, 6, 7, 8, 9));

////////Summing with arguments object////////
function doSomethingSum(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

////////Default Parameters////////
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet());       // Hello, Guest
console.log(greet("Ann"));  // Hello, Ann

////////Rest Parameters////////
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

////////Spread Parameters////////
function multiply(a, b, c) {
    return a * b * c;
}
let nums = [2, 3, 4];
console.log(multiply(...nums)); // 24

////////Destructuring Parameters////////
function displayFullName({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`);
}
displayFullName({ firstName: "Somchai", lastName: "Jaidee" });

function addFromArray([x, y]) {
    return x + y;
}
console.log(addFromArray([5, 10])); // 15