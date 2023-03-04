/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = new Set(nums1)
    let array = []
    for(let num of nums2){
        if(result.has(num)){
            array.push(num)
            result.delete(num)
        }
    }
    return array;
};