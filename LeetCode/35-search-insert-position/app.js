var app = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }
    // Return position of target if not found
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < target && nums[j] > target) {
                return j;
            }
        }
    }
    // Return position of target if it were in array
    var lastNum = nums.slice(-1);
    if (lastNum <= target) {
        return nums.length;
    }
    return 0;
};

module.exports = app;
