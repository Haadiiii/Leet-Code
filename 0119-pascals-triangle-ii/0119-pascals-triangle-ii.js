/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = []
    
    for(let i=0; i<= rowIndex; i++){
        let row = [i+1]
        row[0] = 1
        row[i] = 1
        
        for(let k=1; k < i; k++){
            row[k] = result[i-1][ k-1] + result[i-1][k]
            
        }
        result.push(row)
    }
    return result[rowIndex];
   //  let result = []
   //  if(rowIndex >= 0) result.push([1])
   //  if(rowIndex >= 1) result.push([1,1])
   //  console.log(result)
   //  for(let i = 1; i <= rowIndex; i++){
   //      let firstNum = 1
   //      let lastNum = 1
   //      let prevArr = result[i-1]
   //      if(prevArr.length === 1){
   //          result.push([firstNum,firstNum + lastNum,lastNum ])
   //      }else{
   //          let left = 0
   //          let right = 1 
   //          let add = []
   //          while(right < prevArr.length){
   //              add.push(prevArr[left] + prevArr[right])
   //              left++
   //              right++
   //          }
   //          result.push([firstNum, ...add, lastNum])
   //      }
   //  }
   // return (result[rowIndex]);
};
