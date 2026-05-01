const arr1=[4,8,2,11,6,7,10];
const arr2=[11,-4,1,50,0,3,17];
const arr3=[9,20,-7,-16,13,5,25];

// Named function 
function namedFunction(arr){
  console.log("Inside the named function.");
  arr.sort((a,b)=>b-a);
  console.log(`Maximum number in the array: ${arr[0]}`);
  let sum=0;
  arr.forEach((element)=>{
    sum+=element
  });
  console.log(`Sum of all elements in the array is: ${sum}`);
  let count=0;
  arr.forEach(element=>element%2!==0 && count++);
  console.log(`Number of odd numbers in the array is: ${count}`);
}

// Annonymous function
let annonymousFunction = function(arr){
  console.log("Inside the annonymous function.");
  arr.sort((a,b)=>b-a);
  console.log(`Maximum number in the array: ${arr[0]}`);
  let sum=0;
  arr.forEach((element)=>{
    sum+=element
  });
  console.log(`Sum of all elements in the array is: ${sum}`);
  let count=0;
  arr.forEach(element=>element%2!==0 && count++);
  console.log(`Number of odd numbers in the array is: ${count}`);
}

// Arrow function
let arrowFunction=(arr)=>{
  console.log("Inside the arrow function.");
  arr.sort((a,b)=>b-a);
  console.log(`Maximum number in the array: ${arr[0]}`);
  let sum=0;
  arr.forEach((element)=>{
    sum+=element
  });
  console.log(`Sum of all elements in the array is: ${sum}`);
  let count=0;
  arr.forEach(element=>element%2!==0 && count++);
  console.log(`Number of odd numbers in the array is: ${count}`);
}

namedFunction(arr1);
console.log("---------- RESULT ----------");
annonymousFunction(arr2);
console.log("---------- RESULT ----------");
arrowFunction(arr3);