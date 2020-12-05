// Load fs module
const fs = require("fs");

// Return content of input.txt
let input = fs.readFileSync("./input.txt", "utf-8");

// Retrieve array from input
let map = input.split("\n");

let ints = {'B':'1', 'F':'0'};
let finalSeat = 0;
let arrayOfSeats = [];

for (let i = 0; i < map.length; i++) {

// Since row can be converted to binary
    let row = map[i].slice(0, -3);
    row = row.replace(/[BF]/g, int => ints[int]);
    let seatRow = parseInt(row, 2);
    
// Retrieve column and find seat
    let col = map[i].slice(7, 10);
    let colSeat = 0;
    if (col.charAt(0) == 'R') {
        colSeat = 7;
        if (col.charAt(1) ==  'L') {
            colSeat = 4;
            if (col.charAt(2) == 'R') {
                colSeat = 5;
            }
        }
        else if (col.charAt(1) == 'R') {
            colSeat = 7;
            if (col.charAt(2) == 'L') {
                colSeat = 6;
            }
        }
    }
    else {
        if (col.charAt(1) == 'R') {
            colSeat = 3;
            if (col.charAt(2) == 'L') {
                colSeat = 2;
            }
        }
        else if (col.charAt(2) == 'R') {
            colSeat = 1;
        }
    }
    finalSeat = seatRow * 8 + colSeat;
    arrayOfSeats.push(finalSeat);
}

console.log("Seat with the highest ID should appear first index of array " + arrayOfSeats.sort((a, b) => b - a));

// Sort array min to max
let sortedSeats = arrayOfSeats.sort((a, b) => a - b);

for (let k = 1; k < sortedSeats.length; k++) {
    if(sortedSeats[k] - sortedSeats[k-1] != 1) {
           console.log("Seat with no ID should be " + sortedSeats[k] - 1);
           break;
    }
}
