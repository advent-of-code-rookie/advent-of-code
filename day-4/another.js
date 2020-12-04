// Load fs module
const fs = require("fs");

// Return content of input.txt
let input = fs.readFileSync("./input.txt", "utf-8");

var map = input
    .replace(/\n\r/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/g);

let isIncluded = 0;

for (let i = 0; i < map.length; i++) {
    let cleanSet = map[i]
        .replace(/\s/g, "-")
        .replace(/\:((.*?)\-)/g, " ")
        .replace(/\:(?:[^\$\\]|\\.)*\w/g, "");
    let dataIndex = cleanSet.split(" ");
    let values = [
        "byr",
        "iyr",
        "eyr",
        "hgt",
        "hcl",
        "ecl",
        "pid",
    ]
    let checkVals = values.every(val => dataIndex.includes(val));
    if (checkVals)
    isIncluded++;
}

console.log(isIncluded);