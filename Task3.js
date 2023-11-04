// TASK 3//
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings.filter((item) => typeof item === "number") // Filter out letters
                           .map((item) => (typeof item === "number" && item !== 0) ? -item : item); // Reverse the numbers

console.log(result);
 