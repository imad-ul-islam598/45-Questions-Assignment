"use strict";
/*
Exercise # 41:-

Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
// Array of magician names
let magicians = ["Imad", "Ausaf", "Afaq", "Zia"];
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Calling the function
show_magicians(magicians);
