var romanToInt = function(s) {
    const romanNumerals = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
};

    let result = 0 ; 
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i --) {
        const currentValut = romanNumerals[s[i]];
        if (currentValut < prevValue) {
            result -= currentValut;
        } else {
            result += currentValut;
        }
        prevValue = currentValut
    }
    return result; 
};