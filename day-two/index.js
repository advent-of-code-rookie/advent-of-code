// Load fs module
const fs = require("fs");

// Return content of input.txt
let input = fs.readFileSync("./input.txt", "utf-8");

// Retrieve array from input
let inputInts = input.split("\n");

// Number of times given character is present within password
let coincidence = 0;

inputInts.forEach(element => {

// Remove undesired characters
    let applyRegex = element.replace(/-|:/g, " ");

// Apply blank spaces
    let password = applyRegex.split(" ");

// Check min times given character must be present
    let minVal = parseInt(password[0]);

// Chcek max times given character must be present
    let maxVal = parseInt(password[1]);

// Letter to check within password
    let char = password[2];

// Set of characters within password
    let chars = password[4];
// Number of times letter gets repeated within set of characters
    let repetition = chars.split(char).length-1;

// Iterate to retrieve total number of times password can be validated
    if (repetition >= minVal && repetition <= maxVal) {
        coincidence++;
    }
});

console.log("The number we're looking for is " + coincidence);

// ------ Second part ------- //

// Number of times password is valid
let coincidence_two = 0;

var i = 0;

// Iterate through array
for (let k = 0; k < inputInts.length; i++) {
    let applyReg = inputInts[k].replace(/-|:/g, " ");
    let password_two = applyReg.split(" ");
    let minVal_two = parseInt(password_two[0]);
    let maxVal_two = parseInt(password_two[1]);
    let char_two = password_two[2];
    let chars_two = password_two[4];

// Check if positions coincide with given character - index starts at position [1]
    if (
        (chars_two.charAt(minVal_two -1) == char_two && chars_two.charAt(maxVal_two -1) !== char_two) ||
        (chars_two.charAt(minVal_two -1) !== char_two && chars_two.charAt(maxVal_two -1) == char_two)
        ) {
        coincidence_two++;
    }
    k++;
}

console.log("The number we're looking for is " + coincidence_two);
