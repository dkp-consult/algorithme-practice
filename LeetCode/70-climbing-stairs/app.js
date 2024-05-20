var climbStairs = function(n) {
    const fibonacciArray = [1, 1];
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        }
    }
    return fibonacciArray.pop();
};

module.exports = { climbStairs };
