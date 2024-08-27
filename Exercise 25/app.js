"use strict";
/* Exercise 25:-

Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */
/* let alien_color:string = "Green";

if (alien_color === "Green") {
    console.log("the player just earned 5 points");
}
 */
// Version that fails the if test (no output):
let alien_color1 = 'red';
if (alien_color1 === 'green') {
    // Since the condition is not met, there will be no output.
    console.log("Player just earned 5 points!");
}
