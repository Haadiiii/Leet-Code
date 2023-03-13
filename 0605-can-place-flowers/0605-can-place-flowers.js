/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) {
        // If we don't need to plant any new flowers, return true
        return true;
    }
    let count = 0; // Count of new flowers placed
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            // If the current plot is empty and its neighbors are also empty (or out of bounds), then we can place a new flower here
            flowerbed[i] = 1; // Place the new flower
            count++; // Increment the count of new flowers placed
            if (count >= n) {
                // If we have placed enough new flowers, return true
                return true;
            }
        }
    }
    // If we haven't placed enough new flowers, return false
    return false;
};