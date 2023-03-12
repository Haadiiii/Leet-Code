/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
      const commonStrings = new Map();
    let minIndexSum = Infinity;
    
      for (let i = 0; i < list1.length; i++) {
        const string = list1[i];
        if (list2.includes(string)) {
            const indexSum = i + list2.indexOf(string);
            commonStrings.set(string, indexSum);
            minIndexSum = Math.min(minIndexSum, indexSum);
        }
    }

    // Find all common strings with the minimum index sum
    
       const result = [];
    for (const [string, indexSum] of commonStrings) {
        if (indexSum === minIndexSum) {
            result.push(string);
        }
    }

    return result;
};