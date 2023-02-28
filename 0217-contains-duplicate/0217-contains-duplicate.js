/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   // let seen = set()
   //  for num in nums:
   //      if num in seen:
   //          return True
   //      seen.add(num)
   //  return False
    
    // let seen = new Set();
    // for (let num of nums) {
    //     if (seen.has(num)) {
    //         return true;
    //     }
    //     seen.add(num);
    // }
    // return false;
    
        let seen = new Set()
    for(let num of nums){
        if(seen.has(num)){
            return true
        }
        seen.add(num)
    }
    return false
};