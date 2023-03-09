/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
     const stack = [];
  const nextGreater = {};

  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i];
    while (stack.length && stack[stack.length - 1] < num) {
      stack.pop();
    }
    nextGreater[num] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(num);
  }

  return nums1.map((num) => nextGreater[num]);
};