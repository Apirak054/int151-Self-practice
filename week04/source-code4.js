////////Chapter2-ArrayMethods/////////

//--- Reverse ---//
const words = ["cat", "dog", "bird"];
words.reverse();
console.log(words); 

//--- Filter ---//
// Anonymous arrow
const startBwords = words.filter((word) => word.startsWith("b"));

// Anonymous function expression
const startBwords1 = words.filter(function(word) {
  return word.startsWith("b");
});

// Named arrow
const checkStartB = (word) => word.startsWith("b");
const startBwords2 = words.filter(checkStartB);

// Named function declaration
function checkStartB2(word) {
  return word.startsWith("b");
}
const startBwords3 = words.filter(checkStartB2);

//--- forEach ---//
const startCwords = [];
words.forEach((word) => {
  if (word.startsWith("c")) {
    startCwords.push(word);
  }
});

//--- Map ---//
const employees1 = [
    { id: "e1001", firstname: "Somchai", lastname: "Jaidee" },
    { id: "e1002", firstname: "Pornchai", lastname: "Deejai" },
    { id: "e1005", firstname: "Suda", lastname: "Rakdee" },
  ];
  const fullname = employees1.map(e => (e.firstname + " " + e.lastname).toUpperCase());

//--- Includes ---//   
const wordjai = employees1
  .filter(emp =>
    emp.firstname.toLowerCase().includes("jai") ||
    emp.lastname.toLowerCase().includes("jai")
  )
  .map(emp => emp.firstname + " " + emp.lastname);

//--- Reduce ---//   
const carts = [
    { productId: 1002, price: 10, amount: 5 },
    { productId: 2005, price: 100, amount: 2 },
    { productId: 5001, price: 5, amount: 4 },
  ];
  const netPrice = carts.reduce((total, cart) =>
    total + (cart.price * cart.amount) * 1.07, 0);

//--- Push / Pop / Unshift / Shift ---//
const nums = [2, 4, 6];
nums.push(8);    
nums.pop();       
nums.unshift(10); 
nums.shift();     

//--- Splice ---//
const words1 = ["apple", "orange", "banana"];
words1.splice(2, 0, "cherry", "berry"); 
words1.splice(2, 1);                    
words1.splice(2, 1, "mango");           

//--- Slice ---//
console.log(words1.slice(1));    
console.log(words1.slice(0, 3)); 
console.log(words1.slice(-3));   

//--- Fill ---//
const arr = [1, 2, 3, 4];
arr.fill(0, 2, 4); 
arr.fill(5, 1);    
arr.fill(6);       

//--- Find / FindIndex ---//
const nums2 = [5, 12, 8, 130, 44];
console.log(nums2.find(n => n > 10));       
console.log(nums2.findIndex(n => n > 10));  

//--- Every / Some ---//
const nums3 = [1, 30, 39, 29, 10, 13];
console.log(nums3.every(n => n < 40)); 
console.log(nums3.some(n => n < 10)); 

//--- Sort ---//
const months = ['March', 'jan', 'feb', 'Dec'];
months.sort(); 

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);

//--- Concat ---//
const a1 = ['a', 'b', 'c'];
const a2 = ['d', 'e', 'f'];
const merged = a1.concat(a2); 

//--- Join ---//
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());   
console.log(elements.join(' ')); 