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
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higherthan Mark's!");
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
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higherthan Mark's!");
}
