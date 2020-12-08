const fs = require('fs');

const lines = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

console.log(lines);

let accumulator = 0;



let pointer = 0;

for (let i = 0; i < lines.length; i++) {
    let prueba = lines[i].slice(0, 3);
    let prueba2 = lines[i].slice(4, 5);
    let prueba3 = parseInt(lines[i].slice(5, 8));
    if (prueba == 'acc') {
        if (prueba2 == '+') {
            accumulator += prueba3;
        }
        else if (prueba2 == '-') {
                accumulator -= prueba3;
        }
        
    }
    // else if (prueba == 'jmp') {
    //     if (prueba2 == '+') {
    //         var newLine = i + prueba3
    //         i = newLine;
    //     }
    //     else if (prueba2 == '-') {
    //        newLine = i - prueba3;
    //         i = newLine;
    //     }
    // }

}

console.log(accumulator);


