/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let positive = 0;
    let negative = 0;
    
    for(let i=0; i< nums.length; i++){
        if(nums[i] < 1 && nums[i] !== 0){
            negative+=1
        }else if(nums[i] !== 0) {
            positive+=1
        }
    }
    
    if(positive > negative){
        return positive;
    }else if(negative === 0){
        return positive;
    }else{
        return negative;
    }
    
};