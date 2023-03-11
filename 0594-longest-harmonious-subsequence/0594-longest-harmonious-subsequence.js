/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
        const freq = {}; // frequency map of numbers in the array
    let longest = 0; // length of the longest harmonious subsequence
    
    // create the frequency map of numbers in the array
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    // check each number in the frequency map
    for (const num in freq) {
        if (freq.hasOwnProperty(num)) {
            const numInt = parseInt(num); // convert the number to an integer
            
            // check if there exists a number in the frequency map that is exactly 1 greater than the current number
            if (freq[numInt + 1]) {
                const subseqLength = freq[num] + freq[numInt + 1]; // length of the harmonious subsequence
                
                // update the length of the longest harmonious subsequence if necessary
                if (subseqLength > longest) {
                    longest = subseqLength;
                }
            }
        }
    }
    
    return longest;
}