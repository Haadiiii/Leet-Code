/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const freqMap = {};
  let maxFreq = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (freqMap[num] === undefined) {
      freqMap[num] = {
        freq: 1,
        firstIndex: i,
        lastIndex: i,
      };
    } else {
      freqMap[num].freq++;
      freqMap[num].lastIndex = i;
    }
    maxFreq = Math.max(maxFreq, freqMap[num].freq);
  }

  let minLength = nums.length;

  for (const num in freqMap) {
    const { freq, firstIndex, lastIndex } = freqMap[num];
    if (freq === maxFreq) {
      const subarrayLength = lastIndex - firstIndex + 1;
      minLength = Math.min(minLength, subarrayLength);
    }
  }

  return minLength;
};