// filter + map
function studentsPassing(students) {
    return students
      .filter(student => student.score >= 70)
      .map(student => student.name.toUpperCase());
  }
  
  const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
  ];
  
  console.log(studentsPassing(studentScores)); 
  
  // Array.isArray
  console.log(Array.isArray([]));                 
  console.log(Array.isArray(["a",12,false]));      
  console.log(Array.isArray(new Array(2)));        
  console.log(Array.isArray("[]"));                
  console.log(Array.isArray(123));                 
  console.log(Array.isArray(false));               
  console.log(Array.isArray("1"));                
  console.log(Array.isArray({}));                 
  
  // merge array
  const num1 =[1,2,3]
  const num2 =[4,5,6]
  console.log(...num1,...num2)            
  console.log(num1.concat(num2))         
  
  // toString
  console.log(num1.toString())           
  
  // join
  console.log(num1.join(".")) 
  console.log(num1.join(",")) 
  console.log(num1.join(":")) 
  console.log(num1.join(";")) 
  console.log(num1.join("-")) 
  
  // includes
  console.log("mangoteen".includes("go"));           
  console.log("mangoteen".includes("Go"));           
  console.log(["mangoteen","mango"].includes("go")); 
  console.log(["mangoteen","mango"].includes("mango")); 
  console.log(["mangoteen","mango"].includes("MANGO")); 
  
  // sort number
  const arr = [1,30,4,21,1000];
  console.log(arr.sort((a,b) => b-a));
  
  // sort object by name
  const student2 = [
    {id:66500102 , name :"suda" , gpa :2.5},
    {id:66500555 , name :"ada" , gpa :2.8},
    {id:66500589 , name :"pornchai" , gpa :3.25},
    {id:66500102 , name :"Pornsak" , gpa :3.8}
  ];
  const result = student2.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  console.log(result);