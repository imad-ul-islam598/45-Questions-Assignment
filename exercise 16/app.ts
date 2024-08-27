/* 
Exercise # 16:-

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */


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
let middleIndex: number = Math.floor(myGuests.length / 2);

// Adding a new guest add middle index of array.
myGuests.splice(middleIndex, 0, "Azam");

// Print a message for our updated list.
console.log("Updated list of our Guests");

// Sending an invitation message to our guests one by one with their names.
myGuests.forEach(oneGuest => console.log(`Assalam O Alaikum ${oneGuest}, Would you like to dinner with me?`));