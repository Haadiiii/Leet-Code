/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
     const n = nums.length;
  let start = 0;
  let end = 0;
  let currLength = 1;
  let maxLength = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      end++;
      currLength++;
    } else {
      start = i;
      currLength = 1;
    }
    maxLength = Math.max(maxLength, currLength);
  }

  return maxLength;
};