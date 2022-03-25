/**
 * calcAverage calculates the average of three scores
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 * @returns {number} average of value1, value2, and value3
 */
/*
const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        console.log(
            `Dolphins win!\nDolphins Score: ${avgDolphins}\nKoalas Score: ${avgKoalas}`
        );
    } else if (avgDolphins * 2 < avgKoalas) {
        console.log(
            `Koalas win!\nDolphins Score: ${avgDolphins}\nKoalas Score: ${avgKoalas}`
        );
    } else {
        console.log(`No team wins...`);
    }
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);
*/

// CODING CHALLENGE #2

/*
const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300
        ? billValue * 0.15
        : billValue * 0.2;
};

const bills = [125, 555, 44];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    total[i] = tips[i] + bills[i];
}

console.log(tips, total);
*/

// CODING CHALLENGE #3
/*
const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(
        `${mark.firstName + " " + mark.lastName}'s BMI (${
            mark.bmi
        }) is higher than ${john.firstName + " " + john.lastName}'s (${
            john.bmi
        })`
    );
} else if (mark.calcBMI() < john.calcBMI()) {
    console.log(
        `${john.firstName + " " + john.lastName}'s BMI(${
            john.bmi
        }) is higher than ${mark.firstName + " " + mark.lastName}'s (${
            mark.bmi
        })`
    );
} else {
    console.log(
        `${mark.firstName + " " + mark.lastName} and ${
            john.firstName + " " + john.lastName
        } have the same BMI (${mark.bmi})`
    );
}
*/

// CODING CHALLENGE #4

const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300
        ? billValue * 0.15
        : billValue * 0.2;
};

function calcAverage(arr) {
    let sum = 0;
    const count = arr.length;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / count;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips, totals);
console.log(calcAverage(totals));
