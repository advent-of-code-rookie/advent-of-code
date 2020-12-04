// Load fs module
const fs = require("fs");

// Return content of input.txt
let input = fs.readFileSync("./input.txt", "utf-8");

// Clean input
var map = input
    .replace(/\n\r/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/g);

// List of vars that need to match conditions
let isIncluded = 0;
let isIncludedByr = 0;
let isIncludedIyr = 0;
let isIncludedEyr = 0;
let isIncludedHgtCm = 0;
let isIncludedHgtIn = 0;
let isIncludedHcl = 0;
let isIncludedEcl = 0;
let isIncludedPid = 0;


// Fisrt case scenario: check if contains conditions
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
    if (checkVals) {
        isIncluded++;

// Second case scenario: check if conditions and values match
// -------------------------------- BYR
        let cleanSetByr = map[i]
            .replace(/\s/g, "-");
        let indexByr = cleanSetByr.indexOf("byr")
        let indexByrDef = cleanSetByr.substr(indexByr);
        let cleanIndexByr = indexByrDef.replace(/\-(?:[^\$\\]|\\.)*\w/g, "").replace(":","e").replace("byre","");
        let numberByr = parseInt(cleanIndexByr);
        if (numberByr >= 1920 && numberByr <= 2002) {
            isIncludedByr++;
// -------------------------------- Iyr
            let cleanSetIyr = map[i]
                .replace(/\s/g, "-");
            let indexIyr = cleanSetIyr.indexOf("iyr")
            let indexIyrDef = cleanSetIyr.substr(indexIyr);
            let cleanIndexIyr = indexIyrDef.replace(/\-(?:[^\$\\]|\\.)*\w/g, "").replace(":","e").replace("iyre","");
            let numberIyr = parseInt(cleanIndexIyr);
            if (numberIyr >= 2010 && numberIyr <= 2020) {
                isIncludedIyr++;
// -------------------------------- Eyr
                let cleanSetEyr = map[i]
                    .replace(/\s/g, "-");
                let indexEyr = cleanSetEyr.indexOf("eyr")
                let indexEyrDef = cleanSetEyr.substr(indexEyr);
                let cleanIndexEyr = indexEyrDef.replace(/\-(?:[^\$\\]|\\.)*\w/g, "").replace(":","e").replace("eyre","");
                let numberEyr = parseInt(cleanIndexEyr);
                if (numberEyr >= 2020 && numberEyr <= 2030) {
                    isIncludedEyr++;  
// -------------------------- HCL
                    let cleanSetHcl = map[i]
                        .replace(/\s/g, "-");
                    let indexHcl = cleanSetHcl.indexOf("hcl")
                    let indexHclDef = cleanSetHcl.substr(indexHcl);
                    let cleanIndexHcl = indexHclDef.replace(/\-(?:[^\$\\]|\\.)*\w/g, "").replace(":","e").replace("hcle","");
                    if (cleanIndexHcl.charAt(0) == '#' && cleanIndexHcl.length == 7 && !cleanIndexHcl.includes("[^ghijklmnopqrstuvwxyz]")) {
                        isIncludedHcl++;
// ------------------------- ECL
                        let cleanSetEcl = map[i]
                            .replace(/\s/g, "-");
                        let indexEcl = cleanSetEcl.indexOf("ecl")
                        let indexEclDef = cleanSetEcl.substr(indexEcl);
                        let cleanIndexEcl = indexEclDef.replace(/\-(?:[^\$\\]|\\.)*\w/g, "").replace(":","e").replace("ecle","");
                        if (
                            cleanIndexEcl.includes("amb") ||
                            cleanIndexEcl.includes("blu") ||
                            cleanIndexEcl.includes("brn") ||
                            cleanIndexEcl.includes("gry") ||
                            cleanIndexEcl.includes("grn") ||
                            cleanIndexEcl.includes("hzl") ||
                            cleanIndexEcl.includes("oth")
                            ) {
                                isIncludedEcl++;
// --------------------------- PID
                                let cleanSetPid = map[i]
                                    .replace(/\s/g, "-");
                                let indexPid = cleanSetPid.indexOf("pid")
                                let indexPidDef = cleanSetPid.substr(indexPid);
                                let cleanIndexPid = indexPidDef.replace(/\-(?:[^\$\\]|\\.)*\w/g, "").replace(":","e").replace("pide","");
                                if (cleanIndexPid.length == 9) {
                                    isIncludedPid++;
// ------------------------------ HGT
                                    let cleanSetHgt = map[i]
                                        .replace(/\s/g, "-");
                                    let indexHgt = cleanSetHgt.indexOf("hgt")
                                    let indexHgtDef = cleanSetHgt.substr(indexHgt);
                                    let cleanIndexHgt = indexHgtDef.replace(/\-(?:[^\$\\]|\\.)*\w/g, "").replace(":","e").replace("hgte","");
                                    let indexHgtCm = cleanIndexHgt.includes("cm");
                                    let indexHgtIn = cleanIndexHgt.includes("in");
                                    if (indexHgtCm) {
                                        let numberHgtCm = parseInt(cleanIndexHgt);
                                        if (numberHgtCm >= 150 && numberHgtCm <= 193) {
                                            isIncludedHgtCm++;
                                        }
                                    }
                                    else if (indexHgtIn) {
                                        let numberHgtIn = parseInt(cleanIndexHgt);
                                        if (numberHgtIn >= 59 && numberHgtIn <= 76) {
                                        isIncludedHgtIn++;
                                        }
                                    }
                                }
                            }
                    }
                }
            }
        }
    }
}

console.log("Firstly, we can validate " + isIncluded + " number of passports");
console.log("We validate " + isIncludedByr + " number of passports that match condition regarding year of birth");
console.log("We validate " + isIncludedIyr + " number of passports that match condition regarding issue year");
console.log("We validate " + isIncludedEyr + " number of passports that match condition regarding expiration year");
console.log("We validate " + isIncludedHcl + " number of passports that match condition regarding hair color");
console.log("We validate " + isIncludedEcl + " number of passports that match condition regarding eye color");
console.log("We validate " + isIncludedPid + " number of passports that match condition regarding passport id");
console.log("We validate " + isIncludedHgtCm + " number of passports that match condition regarding heigth in cm");
console.log("We validate " + isIncludedHgtIn + " number of passports that match condition regarding heigth in in");
let isIncludedHgtTotal = isIncludedHgtCm + isIncludedHgtIn;
console.log("So, finally, we validate as many as " + isIncludedHgtTotal + " number of passports total");