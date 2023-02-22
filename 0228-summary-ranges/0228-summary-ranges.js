/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return [];
    }
nums.sort((a, b) => a - b);
    const ranges = getRanges(nums);
    return ranges.map(range => range[0] === range[1] ? `${range[0]}` : `${range[0]}->${range[1]}`);
}

function getRanges(nums) {
    const ranges = [];
    let start = nums[0];
    let end = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === end + 1) {
            end = nums[i];
        } else {
            ranges.push([start, end]);
            start = nums[i];
            end = nums[i];
        }
    }
    ranges.push([start, end]);
    return ranges;
}