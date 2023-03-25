/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(image) {
      const m = image.length;
  const n = image[0].length;
  const result = new Array(m);

  for (let i = 0; i < m; i++) {
    result[i] = new Array(n);

    for (let j = 0; j < n; j++) {
      let sum = 0;
      let count = 0;

      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          if (k >= 0 && k < m && l >= 0 && l < n) {
            sum += image[k][l];
            count++;
          }
        }
      }

      result[i][j] = Math.floor(sum / count);
    }
  }

  return result;
};