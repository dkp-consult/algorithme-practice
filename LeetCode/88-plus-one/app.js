var plusOne = function(digits) {
    // Convert digits to string & remove ','
    var number = digits.toString().replace(/,/g, ''); 
    // Convert string to number & add 1
    var preAnswer = BigInt(number) + 1n; 
    // Convert number to string & convert string to array
    var answer = preAnswer.toString().split('').map(Number); 
    return answer;
};

module.exports = { plusOne };
