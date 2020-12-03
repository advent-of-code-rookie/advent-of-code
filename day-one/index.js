// Load fs module
const fs = require("fs");

// Returns content of input.txt
let input = fs.readFileSync("./input.txt", "utf-8");

// Get array of integers
let inputInts = input.split("\n");
let ints = inputInts.map(Number);

// Iterate array
for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
        if (ints[i] + ints[j] == 2020) {
            var numberA = ints[i];
            var numberB = ints[j];
            var multiplication = ints[i] * ints[j];
        }
    }
}
// Sum result
console.log(numberA + " + " + numberB + " = 2020");

// Multiplication result
console.log("hence " + numberA + " * " + numberB + " = " + multiplication)
