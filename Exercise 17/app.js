"use strict";
/*
Exercise # 17:-

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */


//creating a myguest Array.
let myGuests = ["Huzaifa", "Abdullah", "Hamza", "junaid"];
//making a variable for those guests who cant come.
let dontCome = myGuests[0];
// print the name of guest who can't come.
console.log(dontCome, "can't come?");
// Add or remove values from myGuest array.
// Note: Splice function is used to replace a name in array
myGuests.splice(0, 1, "Ubaid");
// print a message for all guests
console.log("Good News! I have found a bigger table for the Dinner.");
// Adding a new guest at starting index of array.
myGuests.unshift("Abbas");
// Adding a new guest at ending index of array.
myGuests.push("Usman");
// Get a middle index of our myGuest array.
let middleIndex = Math.floor(myGuests.length / 2);
// Adding a new guest add middle index of array.
myGuests.splice(middleIndex, 0, "Azam");
// Print a message for our updated list.
console.log("Updated list of our Guests");
// Sending an invitation message to our guests one by one with their names.
myGuests.forEach(oneGuest => console.log(`Assalam O Alaikum ${oneGuest}, Would you like to dinner with me?`));
// Inform that only two guests invited for dinner.
console.log("Unfortunately, The new table won't arrive on time, so I can invite only two guests for dinner with me");
// Using while loop to remove guests from array until only two names remain.
while (myGuests.length > 2) {
    let removedGuests = myGuests.pop();
    console.log(`Sorry ${removedGuests}, I can't invite you to dinner`);
}
// Sending an information to the last two guests to the list.
console.log(`Invitation to the last two Guests`);
myGuests.forEach(lastTwo => console.log(`Luckily ${lastTwo} , you are still invited`));
// Removing last two guests from the list.
myGuests.pop();
myGuests.pop();
console.log("Empty List:", myGuests);
