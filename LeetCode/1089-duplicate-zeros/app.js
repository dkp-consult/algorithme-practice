var app = function(arr) {
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

module.exports = app ; 