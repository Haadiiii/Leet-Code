/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     let number = 0;
//     let largeNum = prices.length -1
    
//     for(let i=0; i< prices; i++){
        
//     }
    
    let minPrice = Infinity
    let maxProfit = 0
    
    for (let price of prices){
        if(price < minPrice){
            minPrice = price;
        }
        else{
            maxProfit = Math.max(maxProfit, price - minPrice)
            
        }
        
    }
  return maxProfit;
};