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
            var numberA_one = ints[i];
            var numberB_one = ints[j];
            var multiplication_one = ints[i] * ints[j]
        }
        for (let k = j + 1; k < ints.length; k++) {
            if (ints[i] + ints[j] + ints[k] == 2020) {
                var numberA_two = ints[i];
                var numberB_two = ints[j];
                var numberC_two = ints[k];
                var multiplication_two = ints[i] * ints[j] * ints[k];
            }
        }
    }
}

// Sum result with two values
console.log("Summing two values: " + numberA_one + " + " + numberB_one + " = 2020");

// Sum result with three values
console.log("Summing three values: " + numberA_two + " + " + numberB_two + " + " + numberC_two + " = 2020");

// Multiplication result with two values
console.log("hence multiplicating two values: " + numberA_one + " * " + numberB_one + " = " + multiplication_one)

// Multiplication result with three values
console.log("hence multiplicating three values: " + numberA_two + " * " + numberB_two + " * " + numberC_two + " = " + multiplication_two);
