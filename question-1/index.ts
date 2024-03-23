// // //Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

// // Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a string that looks like a number, JavaScript converts the string to a number for the operation.

// //Solution
// a function that takes two parameters: a number and a string.

function arithmetic_with_mixed_type(anynumber: number, anystring: string) {
  //     Return their sum as a number.
  //case-1
  let sum;
  sum = anynumber + anystring; //in this way it concatenate the number with string.
  console.log(sum); //When you simply add number and string together,it concatenates both.

  //case-2
  //if we want that string should behave as a number so we have to convert that string into number.
  sum = anynumber + Number(anystring); //convert string to Number
  console.log(sum); // When you add a number to a string that looks like a number, JavaScript converts the string to a number for the operation.
}

arithmetic_with_mixed_type(4, "4");
arithmetic_with_mixed_type(6,"10")
//Author-HUMA MOHSIN
