// LeetCode challenge 6: https://leetcode.com/problems/valid-parentheses/

var input = "()[]{}";

var isValid = function(s) {
    const stack = [];
    const characters = { 
        ')' : '(', // Why in this order ?!
        '}' : '{',
        ']' : '['
        };
for (const char of s) {
    if (!characters[char]){
        stack.push(char);
    }
    else if (stack.pop() !== characters[char]) {
        return false;
    }
}
return stack.length === 0;
};


// Lire la liste de parenthèse
// Vérifier si l'ouverture a bien sa fermeture
// Vérifier si l'ordre est ok

// solution finded be another dev, watch after searching : https://medium.com/analytics-vidhya/javascript-check-valid-parentheses-with-a-stack-bc7b1bab26c2
// https://javascript.plainenglish.io/how-to-solve-valid-parentheses-in-javascript-18c1316aa7a8