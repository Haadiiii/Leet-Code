/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    let row = m - 1;
    let col = 0;

    while (row >= 0 && col < n) {
        if (grid[row][col] < 0) {
            // If the current element is negative, all elements to its right are also negative
            count += n - col;
            row--;  // Move to the above row
        } else {
            col++;  // Move to the right column
        }
    }

    return count;
};