/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
      let xor = 0;
  for (const num of nums) {
    xor ^= num;
  }
  const lowbit = xor & (-xor);
  let a = 0;
  for (const num of nums) {
    if ((num & lowbit) === lowbit) {
      a ^= num;
    }
  }
  return [a, xor ^ a];
};