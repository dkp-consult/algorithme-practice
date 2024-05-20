function app(num1, num2) {
    // Implement the solution here
var addStrings = function(num1, num2) {
    if (num1.length >=num2.length) {
        console.log(findSum(num1, num2));
    } else {
        findSum(num2, num1);
    }

    function findSum(num1, num2){
        let sum = '';
        let carry = 0;
        let diff = num2.length - num1.length;

        for (i = num1.length - 1; i >= 0; i--) {
            let temp = 
                        (Number(num1.chatAt(i)) % 10) + (Number(num2.chatAt(i + diff)) % 10) + carry;
            if (temp >= 10) {
                sum = (temp % 10) + sum;
                carry = Math.floor(temp / 10);
            } else {
                sum = temp + sum;
                carry = 0;
            }
        }
        if (carry) {
            sum = carry + sum;
        }
        return sum;
    }

};

console.log(addStrings("11", "123"))

// My method fail with big numbers ; but i can't use BigInt :(
    // Explaination for big numers here : https://levelup.gitconnected.com/how-to-add-two-very-large-numbers-in-javascript-6305ed8c5fad

// Just add doesn't work with big num
// Divised by 1000 dosen't work
// 
    return ""; // Placeholder return to be replaced by actual implementation
}

module.exports = app;
