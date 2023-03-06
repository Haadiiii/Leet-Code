/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
let missingCount = 0;
  let i = 0;
  
  while (missingCount < k) {
    if (i >= arr.length || arr[i] !== i + 1 + missingCount) {
      missingCount++;
    } else {
      i++;
    }
  }
  
  return i + k;
};