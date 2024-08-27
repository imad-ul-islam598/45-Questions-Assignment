"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Make some variables.
let pakistan = "pakistan";
let upperCasePakistan = "PAKISTAN";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "Banana", "Strawberry"];
// Tests for equality and inequality with strings.
console.log("\nis pakistan is equal to Pakistan?");
console.log(pakistan == "pakistan");
console.log("\nis pakistan is not equal to pakistan?");
console.log(pakistan != "pakistan");
//  Tests using the lower case function.
console.log("\nis PAKISTAN is equal to pakistan after converting to lowercase");
console.log(upperCasePakistan.toLowerCase() == "pakistan");
console.log("\nis PAKISTAN is not equal to pakistan after converting to lowercase?");
console.log(upperCasePakistan.toLowerCase() != "pakistan");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
console.log("\nis ten is equal to 10?");
console.log(ten == 10);
console.log("\nis ten is not equal to 20?");
console.log(ten != 20);
console.log("\nis ten is greater than 0?");
console.log(ten > 0);
console.log("\nis twenty is less than 10?");
console.log(twenty < 10);
console.log("\nis ten less than or equal to five?");
console.log(10 <= 5);
console.log("\n is twenty greater than or equal to 10?");
console.log(twenty >= 10);
// Tests using "and" and "or" operators.
console.log("\ntwenty is not equal to 10 and twenty is greater than 10.");
console.log(twenty != 10 && twenty > 10);
console.log("\nten is not equal to 20 and ten is greater than 20.");
console.log(ten != 20 && ten > 20);
console.log("\nten is equal to 20 or ten is less than 20.");
console.log(ten == 20 || ten < 20);
console.log("\ntwenty is greater 10 or twenty is equal to 10.");
console.log(twenty > 10 || twenty == 10);
// Test whether an item is in a array.
console.log("\nis apple include in my fruits array?");
console.log(fruits.includes("Apple"));
// Test whether an item is not in a array.
console.log("\nis apple not include in my fruits array?");
console.log(!fruits.includes("Apple"));
