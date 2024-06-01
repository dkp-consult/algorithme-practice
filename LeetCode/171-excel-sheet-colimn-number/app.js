var convertToTitle = function(columnNumber) {
    let result = 0;
    let length = columnNumber.length;

    for (let i = 0; i < length; i++) {
        let char = columnNumber[i];
        let value = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1; // permet de calculer la valeur ASCII et ensuite déduire la valeur ASCII de A pour avoir 
        result = result * 26 + value;
    }
    return result; 
};