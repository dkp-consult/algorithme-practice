// LeetCode challenge 10 : https://leetcode.com/problems/search-insert-position/

// retourner l'index du target
// si index non trouvé, retourné la position d'insertion qu'il aurait
var nums = [1,3,5,6];
var target = 5;

var searchInsert = function(nums, target) {
    for (i = 0; i < nums.length; i++)
        if (nums[i] == target) {
            return [i];
        }
// return position of target
        if (nums[i] != target) {
            for (i = 0; i < nums.length; i++)
            for (j = i + 1; j < nums.length; j++)
                if (nums[i] < target && nums[j] > target )
                    return [j];
        }
// return position of target if he was in array
        var lastNum = nums.slice(-1);
        if (lastNum <=target) {
            var preAnswer = nums.length;
            return (preAnswer); // why no +1 ?!
        }
// return index of last number and add 1 if last num <= target
    };
    
console.log(searchInsert([1,3,5,6], 7));

// Map sur nums
// rangement par ordre croissant => déjà le cas
// vérification que la target est présent
// sinon ajouter le target avec n-1 + petit et n+1 est + grand

// timer one : 20 minutes
// timer two : 19 minutes
