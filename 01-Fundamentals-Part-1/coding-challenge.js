// CODING CHALLENGE 1 & 2

/*
function calcBMI(weight, height) {
    return weight / height ** 2;
}

// TEST DATA 1

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = calcBMI(markWeight, markHeight);
const johnBMI = calcBMI(johnWeight, johnHeight);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else {
    console.log(`John's BMI ${johnBMI} is higherthan Mark's ${markBMI}!`);
}

// TEST DATA 2
const markWeight2 = 95;
const markHeight2 = 1.88;

const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = calcBMI(markWeight2, markHeight2);
const johnBMI2 = calcBMI(johnWeight2, johnHeight2);

const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI2, johnBMI2, markHigherBMI2);

if (markHigherBMI2) {
    console.log(
        `Mark's BMI (${Math.round(
            markBMI2
        )}) is higher than John's (${Math.round(johnBMI2)})!`
    );
} else {
    console.log(
        `John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`
    );
}
*/

// CODING CHALLENGE 3
/*
const dolphinAverage = (96 + 108 + 89) / 3;
const koalaAverage = (88 + 91 + 110) / 3;

if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log("Dolphin's Win!");
} else if (koalaAverage > dolphinAverage && koalaAverage >= 100) {
    console.log("Koala's! Win!");
} else if (koalaAverage == dolphinAverage && koalaAverage >= 100) {
    console.log("It's a tie!");
} else {
    console.log("No team wins!");
}
*/

// CODING CHALLENGE 4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value is ${
        bill + tip
    }`
);
