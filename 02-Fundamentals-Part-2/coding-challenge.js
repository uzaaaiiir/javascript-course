/**
 * calcAverage calculates the average of three scores
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 * @returns {number} average of value1, value2, and value3
 */
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
