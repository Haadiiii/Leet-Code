/**
 * @param {number[]} nums
 * @return {number}
 */

// creat a veriable with 0 integer
// loop through the nums
// make the number veriable equal to the number include in nums at majority level
// return the number veriable

var majorityElement = function(nums) {
 const hash = {}    
    for (let n of nums){
        if (!hash[n]){
            hash[n] = 0;
        }
        hash[n]++;        
        if (hash[n]>nums.length/2){
            return n
        }
    }
};

