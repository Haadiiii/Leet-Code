/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
      const rows = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm")
  ];
  const result = [];
  for (const word of words) {
    const lowercaseWord = word.toLowerCase();
    let row = null;
    for (const r of rows) {
      if (lowercaseWord.split("").every(c => r.has(c))) {
        row = r;
        break;
      }
    }
    if (row) {
      result.push(word);
    }
  }
  return result;

};