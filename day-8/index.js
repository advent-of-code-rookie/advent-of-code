// Load fs module
const fs = require('fs');


// Retrieve content of input
const lines = fs.readFileSync('input.txt', {encoding: 'utf-8'});

class Program {
    constructor(string, options = {}) {
        this.accumulator = 0;

// Pointer to check if index has been covered
        this.pointer = 0;
        this.done = new Set();
        this.options = options;
        this.isFinished = false;

// Clean input 
        this.code = string.split('\n').filter(x => x).map((line) => {
            const {groups} = /^(?<instruction>\D+) \+?(?<value>-?\d+)$/.exec(line);
            groups.value = parseInt(groups.value);
            return groups;
        });
    }

    run() {
        while(true) {
            if(this.pointer == this.code.length) {
                this.isFinished = true;
                break;
            }
            const {instruction, value} = this.code[this.pointer];

            if(this.done.has(this.pointer)) {
                if(this.options.infiniteLoopWarning) console.log('Going back to this instruction makes the program loop forever. Accumulator is' , this.accumulator);
                break;
            }
            this.done.add(this.pointer)

            switch (instruction) {
                case 'nop':
                    this.pointer++;
                    break;
                case 'acc':
                    this.accumulator += value;
                    this.pointer++;
                    break;
                case 'jmp':
                    this.pointer += value;
                    break;
            }
        }
    }
}


// Part two
const p = new Program(lines, {infiniteLoopWarning: true});
p.run();

const code = p.code;
for (let i = 0; i < code.length; i++) {
    const element = code[i];
    if(element.instruction === 'nop' || element.instruction === 'jmp') {
        const copy = JSON.parse(JSON.stringify(code));
        copy[i].instruction = element.instruction === 'nop' ? 'jmp' : 'nop';

        const newSource = copy.map(x => `${x.instruction} ${x.value}`).join('\n');
        const fixedProgram = new Program(newSource);
        fixedProgram.run();

        if(fixedProgram.isFinished) {
            console.log("The value of the accumulator after fixing the program is" , fixedProgram.accumulator);
        }
    }
}