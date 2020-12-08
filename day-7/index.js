// Load fs module
const fs = require('fs');

// Return content of input.txt
const lines = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

const map = new Map();

// Check if bag contains shiny gold
function containsShinyGold(color) {
    if(color === 'shiny gold')  {
        return true;
    }
    else {
        if(!map.has(color))  {
            return false;
        }
    }

// Check if bags inside bag contain shiny gold
    const bagsInBag = map.get(color);
    for (const {color: bag} of bagsInBag) {
        if(containsShinyGold(bag)) {
            return true;
        }
    }
    return false;
}


// Clean input
for (const line of lines) {
    const [bag, bags] = line.split(' bags contain ');

    bags.replace(/\./, '').split(', ').map(txt => {
        const {groups} = /((?<number>\d+) )?(?<color>.*)/.exec(txt.replace(/ bags?/, ''));
        if(!map.has(bag)) {
            map.set(bag, []);
        }
        if(!groups.number) groups.number = 0;
        map.set(bag, [...map.get(bag), groups]);
    })
}

const colors = map.keys();
let total = 0;

for (const color of colors) {
    if(containsShinyGold(color) && color != 'shiny gold') {
        console.log(color);
        total++;
    }
}

console.log(total);

function sumBags(topBag) {
    if(topBag.number == 0) return 0;

    const bagsInBag = map.get(topBag.color);
    let sum = 1;
    for (const bag of bagsInBag) {
        sum += bag.number * sumBags(bag);
    }
    return sum;
}

console.log(sumBags({number: 1, color: 'shiny gold'})-1);