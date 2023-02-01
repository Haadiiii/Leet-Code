/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    if(numRows >= 1) result.push([1])
    if(numRows >= 2) result.push([1,1])
    for(let i = 2; i <numRows; i++){
        let firstNum = 1
        let lastNum = 1
        let prevArr = result[i-1]
        if(prevArr.length === 2){
            result.push([firstNum,firstNum + lastNum,lastNum ])
        }else{
            let left = 0
            let right = 1 
            let add = []
            while(right < prevArr.length){
                add.push(prevArr[left] + prevArr[right])
                left++
                right++
            }
            result.push([firstNum, ...add, lastNum])
        }
    }
   return result;
};