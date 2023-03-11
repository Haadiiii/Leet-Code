/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
        const maxTypes = candyType.length / 2; // maximum number of types of candies Alice can eat
    const candySet = new Set(candyType); // set of unique types of candies
    const uniqueCandies = candySet.size; // number of unique types of candies
    
    // return the minimum of the maximum number of types of candies Alice can eat and the number of unique types of candies
    return Math.min(maxTypes, uniqueCandies);
};