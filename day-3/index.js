// Load fs module
const fs = require("fs");

// Return content of input.txt
let input = fs.readFileSync("./input.txt", "utf-8");

// Retrieve array from input
let map = input.split("\n");

// Starting position
var position_x = 0;

var trees = 0;
line = 1;


console.log(map);

for (let i = 0; i < map.length; i++) {
    if (position_x>=map[i].length)

// Correct position if it's longer than map[i].length
    position_x = position_x - map[i].length;
    console.log("we're at line " + line);

// Check destination character
    console.log(map[i].charAt(position_x))
    if (map[i].charAt(position_x)=='#') {
        trees++;
    }

// Move current position to the left three characters
    position_x+=3;
    line++;
}
console.log(trees);

// Right 1, Down 1  --- 64
// Right 3, Down 1 --- 284
// Right 5, Down 1 --- 71
// Right 7, Down 1 --- 68
// Right 1, Down 2 --- 40 --- For this case, just increment i by two instead of 1 
console.log(64 * 284 * 71 * 68 * 40);

