const numerator   = [10, 0, -15, 25, 7];
const denominator = [2, 5, 3, 0, -7];

let division=((num,deno)=>{
  return new Promise((resolve,reject)=>{
    if(deno!==0){
      resolve(`Result: ${num/deno}`)
    }
    else{
      reject("Division by zero leads to error");
    }
  })
});
for(let i=0;i<5;i++){
  division(numerator[i],denominator[i]).then(res=> console.log(res))
  .catch(err=> console.log(err));
}