//การสร้าง obj แต่ละแบบ/////////////////////

//------Object Literal //
const phone = { 
    brand : "iphone",
    spec:{cpu:"A18",rom:"256",ram:"8"} 
} 

//------Constructor Function//
function Ipad(year, color, display) {
    this.year = year;
    this.color = color;
    this.display = display;
}
const Ipad1 = new Ipad("2025","black","13inc")
console.log(Ipad1)

//-------Class//
class Ipad2 {
    constructor(year, color, display) {
      this.year = year;
      this.color = color;
      this.display = display;
    }
  }
  
  const Ipad3 = new Ipad2("2025", "black", "13inc");
  console.log(Ipad3);

//-------Object.create()//
  const IpadPrototype = {
    info() {
      return `iPad ${this.year}, color: ${this.color}, display: ${this.display}`;
    }
  };
  const Ipad4 = Object.create(IpadPrototype);

Ipad4.year = "2025";
Ipad4.color = "black";
Ipad4.display = "13inc";

console.log(Ipad4);
console.log(Ipad4.info());



////////// การเข้าถึง property//////////////////

const per1 = { firstName:"Apirak", lastName:"chaiagsorn", age:20 }
console.log(per1.firstName)   // dot notation
console.log(per1["lastName"]) // bracket notation




////////// Object เก็บได้หลายชนิด///////////////
let obj = {
    number: 12,
    string: "age",
    boolean: true,
    undefind: undefined,
    null: null,
    array: [1,2,3],
    obj: { array: [123, 35, 56] },
    objinarr: [{obj:'host'}, {book:123}]
  }




///////// Methods (ฟังก์ชันใน Object) ////////////
const square = {
  side: 10,
  area(){ return this.side * this.side }
}
console.log(square.area())




//////// Object Reference ////////////////////
function update(obj){ obj.name = "adam" }
const pet = { name: "eve" }
update(pet)
console.log(pet.name) 




/////// Spread //////////////////////////////
const obj1 = {a:1}, obj2={b:2}
const merged = { ...obj1, ...obj2 } 





////// Destructuring ///////////////////////

const student = { id:1, name:"Somchai" }
let {id, name} = student
console.log(name) 