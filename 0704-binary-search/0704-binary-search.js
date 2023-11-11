/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.includes(target)){
return -1;
    }
    let number= []
    for(let i=0; i< nums.length; i++){
        let minus = -1
        if(nums[i] === target){
            number.push(i)
        }
        
    }
    
    return number;
};