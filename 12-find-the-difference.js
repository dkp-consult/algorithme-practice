// LeetCode challenge 12 : https://leetcode.com/problems/find-the-difference/

var s = "ae";
var t = "aea";


var findTheDifference = function(s, t) {
    let answer = [];
    let sAlph = s.split('').sort();
    let tAlph = t.split('').sort();
    console.log(tAlph);
    console.log(sAlph);
    for (i = 0; i < tAlph.length; i++) {
        if (sAlph[i] !== tAlph[i]) {
            answer.push(tAlph[i]);
        } 
    }
    return answer;

};

console.log(findTheDifference(s, t))

/* Fail on level 6 
    var findTheDifference = function(s, t) {
    let answer = [];
    let sSplitted = s.split('');
    let tSplitted = t.split('');

    for (i = 0; i < s.length || t.length; i++) {
        if (t[i] !== s[i]) {
            answer.push(t[i]);
            break
        } 
    }
    return answer.join('');
};
*/