/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {}

module.exports = transpose;
let scores = [
    [5, 10, 15, 20, 25, 30],
    [8, 13, 18, 23, 28, 33],
    [13, 18, 23, 28, 33, 38]
  ];
 scores.forEach (function (row) {
   row.forEach (function (col) {
    console.log(col);
   })
   console.log('~~~')
 })
