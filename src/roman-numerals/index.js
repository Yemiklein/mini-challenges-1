/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {}

module.exports = romanToDecimal;



const _roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

function romanToDecimal(roman = '') {
    return Object.keys(_roman).reduce((acc, key) => {
        while (roman.indexOf(key) === 0) {
            acc += _roman[key];
            roman = roman.substr(key.length);
        }
        return acc;
    }, 0);
}

console.log(romanToDecimal('MML'))
