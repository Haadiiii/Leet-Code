/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
      const m = mat.length; // number of rows in the original matrix
    const n = mat[0].length; // number of columns in the original matrix
    
    // check if the reshape operation is possible
    if (m * n !== r * c) {
        return mat;
    }
    
    // flatten the original matrix
    const flatMat = mat.flat();
    
    // create the new reshaped matrix
    const newMat = [];
    for (let i = 0; i < r; i++) {
        newMat.push(flatMat.slice(i * c, (i + 1) * c));
    }
    
    return newMat;
};