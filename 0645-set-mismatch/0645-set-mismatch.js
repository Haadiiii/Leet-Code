/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length;
  const set = new Set();
  let duplicate = -1, missing = 1;
  let sum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (const num of nums) {
    if (set.has(num)) {
      duplicate = num;
    }
    set.add(num);
    actualSum += num;
  }

  missing = sum - (actualSum - duplicate);

  return [duplicate, missing];
};