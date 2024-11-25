"use strict";
/*
Exercise # 39:-

City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
// Define the city_country function
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with at least three city-country pairs
const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("Karachi", "Pakistan");
const city3 = city_country("Multan", "Pakistan");
// Print the returned values
console.log(city1);
console.log(city2);
console.log(city3);
