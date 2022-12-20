// LeetCode challenge 13 : https://leetcode.com/problems/climbing-stairs/

var n = 2;

var climbStairs = function(n) {
    const fibonacciArray = [1,1];
    if (n > 1) {
        for (let i = 2; i <=n; i++) {
            fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        }
    };
    return fibonacciArray.pop()
};

console.log(climbStairs(5));

// Suite de Fibonacci : 
// 