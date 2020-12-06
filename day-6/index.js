// Load fs module
const fs = require("fs");

// Return content of input.txt
let input = fs.readFileSync("./input.txt", "utf-8");

// Filter data
const setOfChars = input.split('\n\n').filter(x => x);
console.log(setOfChars);

let total = 0;
let addOnlyRepeated = 0;

// Iterate array - Replace unwanted chars - filter coincidences
for (const setOfChar of setOfChars) {
    const uniqueChars = new Set([...setOfChar.replace(/\n/g, "")]);
    total += uniqueChars.size;

    addOnlyRepeated += [...uniqueChars].filter(char => setOfChar.split('\n').filter(x => x).every(listOfCharacters => listOfCharacters.includes(char))).length;
}

console.log("Total times ANYONE answered yes " + total);

console.log("Total times EVERYONE answered yes " + addOnlyRepeated);