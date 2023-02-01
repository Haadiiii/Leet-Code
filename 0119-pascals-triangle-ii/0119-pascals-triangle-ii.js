/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = []
    
    for(let i=0; i<= rowIndex; i++){
        let row = new Array(i + 1)
        row[0] = 1
        row[i] = 1
        
        for(let k=1; k < i; k++){
            row[k] = result[i-1][ k-1] + result[i-1][k]
            
        }
        result.push(row)
    }
    return result[rowIndex];
};
