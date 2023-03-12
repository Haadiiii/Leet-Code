/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let min_row = m
    let min_col = n
    
    for(let op in ops){
        min_row = Math.min(min_row, ops[op][0])
        min_col = Math.min(min_col, ops[op][1])
    }
    
    return min_row * min_col;
};