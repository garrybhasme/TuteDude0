// code for sum of first n number
const n=12;
let sum=0;
for(let i=1;i<n;i++){
  sum+=i;
}
console.log(`Sum of first ${n} numbers is: ${sum}`);

// printing the table of n

let count = 1;
while(count<11){
  console.log(`${n}x${count}=${n*count}`);
  count++;
}
const var1=5;
const var2=10;
const var3=13;
const var4=153;
const var5=139;
// Sum of its digits and checking is it Amstrong Number
function sumOfDigitsAndAmstrong(input){
  let sumOfDigit=0;
  let temp=0;
  let amstrongNumber=0;
  const strinput=input.toString();
  for(let i=0;i<strinput.length;i++){
    temp=parseInt(strinput[i]);
    sumOfDigit+=temp;
    amstrongNumber+=temp**3;
  }
  console.log(`Sum of Digits of ${input}: ${sumOfDigit}`);
  console.log(`Is it an Amstrong number? ${input==amstrongNumber?'Yes':'No'}`);
}

// Checking number is Prime or not
function isItprime(input){
  let count=2;
  let flag=false;
  while(count<=Math.floor(Math.sqrt(input))){
    if(input%count==0){
      flag=true;
    }
    count++;
  }
  console.log(`Is it a prime number? ${flag==true?'No':'Yes'}`);
}

// Finding the factors
function findingFactors(input){
  let count=1;
  let factor='';
  do{
    if(input%count==0){
      factor+=count;
      factor+=',';
    }
    count++
  }
  while(count<=input)
    console.log(`Factors: ${factor}`);
}
console.log("---------- RESULT ----------");

sumOfDigitsAndAmstrong(var1);
isItprime(var1);
findingFactors(var1);
console.log("---------- RESULT ----------");
sumOfDigitsAndAmstrong(var2);
isItprime(var2);
findingFactors(var2);
console.log("---------- RESULT ----------");
sumOfDigitsAndAmstrong(var3);
isItprime(var3);
findingFactors(var3);
console.log("---------- RESULT ----------");
sumOfDigitsAndAmstrong(var4);
isItprime(var4);
findingFactors(var4);
console.log("---------- RESULT ----------");
sumOfDigitsAndAmstrong(var5);
isItprime(var5);
findingFactors(var5)