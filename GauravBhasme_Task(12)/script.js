let amount=null;
let totalInterest=null;
let principal=150000;
let rateOfInterest=10;
let noOfTimesInterestCompoundedPerYear=1;
let years=3;

function compoundInterestCalculator( principal, rateOfInterest, noOfTimesInterestCompoundedPerYear, years ) {
  let totalAmount=principal*(1+(rateOfInterest/(noOfTimesInterestCompoundedPerYear*100)))**(noOfTimesInterestCompoundedPerYear*years)
  return totalAmount;
} 

amount=compoundInterestCalculator(principal, rateOfInterest, noOfTimesInterestCompoundedPerYear, years );

totalInterest=amount-principal;

console.log(totalInterest);
