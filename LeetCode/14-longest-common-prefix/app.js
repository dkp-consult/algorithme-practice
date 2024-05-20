var app = function(strs) {
    // check if input wasn't empty
    if (!strs || strs.length === 0) return "";

    // sort from longest to shortest 
    var sortedArr = strs.sort((a,b) => a.length - b.length);

    // take shortest string 
    var shortestString = sortedArr[0];

    // starting with entire shortest string, check if each string matches
    // if not, remove ending letter, and check again
    while (!strs.every((string) => string.startsWith(shortestString))) {
        if (shortestString.length === 0) return;

        shortestString = shortestString.slice(0, -1);
    }
    return shortestString;
};

module.exports = app ; 

// Looks like 03-largest-substing but not exactly the same method
// explaination : https://www.linkedin.com/pulse/find-longest-common-prefix-array-strings-javascript-bradshaw