// LeetCode challenge 14 : https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
    // Convert digits to string & remove ','
    var number = digits.toString().replace(/,/g, ''); 
    // Convert string to number & add 1
    var preAnswer = parseInt(number) + 1; 
    console.log(preAnswer)
    // Convert number to string & convert string to array
    var answer = String(preAnswer).split('').map(Number); 
    
};

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])