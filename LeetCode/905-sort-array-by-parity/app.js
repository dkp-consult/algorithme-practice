// https://leetcode.com/problems/sort-array-by-parity/

var sortArrayByParity = function(nums) {
    let parityNums = [] ;
    let unpairNums = [] ;
    let extractedElement = [] ;

    for (let i = 0 ; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            parityNums.push(nums[i]);
            
        } else {
            unpairNums.push(nums[i]);
            
        }
    }

    let answer = parityNums.concat(unpairNums);

    return answer;
};