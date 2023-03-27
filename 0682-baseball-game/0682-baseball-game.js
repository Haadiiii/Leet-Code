/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
      const stack = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    if (!isNaN(op)) {
      stack.push(parseInt(op));
    } else if (op === '+') {
      const lastTwoScores = stack.slice(-2);
      const sum = lastTwoScores[0] + lastTwoScores[1];
      stack.push(sum);
    } else if (op === 'D') {
      const lastScore = stack.slice(-1);
      const doubleScore = lastScore[0] * 2;
      stack.push(doubleScore);
    } else if (op === 'C') {
      stack.pop();
    }
  }

  let totalScore = 0;
  for (let i = 0; i < stack.length; i++) {
    totalScore += stack[i];
  }

  return totalScore;
};