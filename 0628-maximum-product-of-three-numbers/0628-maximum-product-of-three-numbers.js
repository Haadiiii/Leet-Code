/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    // The maximum product can be one of the following:
    // 1. The product of the three largest numbers in the sorted array
    // 2. The product of the two smallest (negative) numbers and the largest number in the sorted array
    return Math.max(nums[0] * nums[1] * nums[n-1], nums[n-1] * nums[n-2] * nums[n-3]);
};