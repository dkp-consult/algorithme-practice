// LeetCode challenge 7: https://leetcode.com/problems/palindrome-number/

var app = function(x) {
    var xArray = x.toString().split('');
    var xArrayReverse = xArray.reverse();
    var xArrayReverseNumber = xArrayReverse.map(Number).join('');
    console.log(xArrayReverseNumber);
    
    if (xArrayReverseNumber != x) {
        return false;
    } else {
        return true;
    }
};

module.exports = app ; 