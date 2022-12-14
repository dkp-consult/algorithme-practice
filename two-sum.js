// LeetCode challenge : https://leetcode.com/problems/two-sum/

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109 */

const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
  var answer = [];
  for (i = 0; i < nums.length; i++) {
    var diff = target - nums[i];
    
    var added = nums[i + 1];
    if (diff === added) {
      answer.push(nums[i], added);
      return answer;
    } else {
      i++;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

// Diff methode : soustraire la valeur 0 issue de nums au target
// Vérifier si le reste stocké dans une variable correspond à un élément de nums
// Dans l'affirmative, retourné l'index soustrait et l'index restant
// Dans la négative, soustraire la valeur 0 + 1, et ainsi de suite
