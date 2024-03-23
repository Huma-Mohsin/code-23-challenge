// //Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
//SOLUTION:-
//Create a function that accepts two decimal numbers
function product_of_two_numbers(number1, number2) {
    //returns their product
    var result = number1 * number2;
    //Round the result to two decimal places.
    var rounded_result = result.toFixed(2);
    //finally return the roundedd figue result.
    return rounded_result;
}
//calling a function inside log.
console.log("\n");
console.log(product_of_two_numbers(3.5, 6.7));
console.log("\n");
console.log(product_of_two_numbers(5, 4));
console.log("\n");
console.log(product_of_two_numbers(2.5123, 45.543));
//Author-HUMA MOHSIN
