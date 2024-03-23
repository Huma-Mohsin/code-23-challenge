// //Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.

//solution
//a function that divides two numbers 
function quotient_remainder(numb1,numb2)://returns both the quotient and the remainder. 
{
    quotient:number;
    remainder:number;
}
{

   let quotient=Math.floor(numb1/numb2) ;
   let remainder=numb1%numb2;
return{quotient,remainder}//Use an object to return both values.
}

//calling function inside log
console.log(quotient_remainder(56,7));
console.log("\n");
console.log(quotient_remainder(85,2));
//Author-HUMA MOHSIN