// LeetCode challenge 4: https://leetcode.com/problems/duplicate-zeros/

var duplicateZeros = function(arr) {
    var toFind = 0;
    var toLength = arr.length;
    
    for (i = 0; i < arr.length; i++)
        if (arr[i] == toFind) {
           arr.splice([i], 0, 0);
           i++
        } 
        if (arr.length >= toLength) {
            arr.length = toLength;
        }
        return arr
};



/* Fonction qui ne fonctionne pas, ne retourne pas tout le tableau

var duplicateZeros = function(arr) {
    var toFind = 0;
    var toLength = arr.length;
    
    for (i = 0; i < arr.length; i++)
        if (arr[i] == toFind) {
           arr.splice([i], 0, 0);
           break
        } 

    if (arr.length >= toLength) {
        arr.length = toLength;
    }
    
    return arr;
};
*/