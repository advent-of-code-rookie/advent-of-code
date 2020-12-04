// Load fs module
const fs = require("fs");

// Return content of input.txt
let input = fs.readFileSync("./input.txt", "utf-8");

// Retrieve array from input
// let map = input.split("\n");
// console.log(map);
// console.log(map[0]);
// let map2 = map.split(" ");

var map = input
    .replace(/\n\r/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/g);

// let prueba = map[0];
// let prueba2 = prueba.split(" ");
// console.log(prueba2[0]);
// let prueba3 = prueba2[0];
// let prueba4 = prueba3.substr(0, prueba3.indexOf(":"));
// console.log(prueba4);
let prueba5 = map[0];
console.log(prueba5);
prueba6 = prueba5
    .replace(/\s/g, "-")
    .replace(/\:((.*?)\-)/g, " ")
    .replace(/\:(?:[^\$\\]|\\.)*\w/g, "");
console.log(prueba6);
// let prueba6 = prueba5.split(" ");
//let prueba7 = prueba6.substr(0, prueba6.indexOf(":"));
// console.log(prueba6);
let prueba7 = prueba6.split(" ");
console.log(prueba7);
let values = [
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
]

let inc = values.every(a1 => prueba7.includes(a1));
console.log(inc);