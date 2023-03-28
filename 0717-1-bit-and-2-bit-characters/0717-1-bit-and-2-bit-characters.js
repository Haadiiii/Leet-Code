/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0;
  while (i < bits.length - 1) {
    if (bits[i] === 0) {
      i += 1; // Move to the next one-bit character
    } else {
      i += 2; // Move to the next two-bit character
    }
  }
  return i === bits.length - 1;
};