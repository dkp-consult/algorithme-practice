// const nums = [2, 7, 11, 15];
// const target = 9;

var app = function (nums, target) {
  var answer = [];
  for (i = 0; i < nums.length; i++) {
    var firstIndex = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      var secondIndex = nums[j];
      if (firstIndex + secondIndex === target) {
        answer.push(i, j);
        return answer;
      }
    }
  }
};

module.exports = app ; 
console.log(app([3, 2, 4], 6));

// Diff methode : soustraire la valeur 0 issue de nums au target
// Vérifier si le reste stocké dans une variable correspond à un élément de nums
// Dans l'affirmative, retourné l'index soustrait et l'index restant
// Dans la négative, soustraire la valeur 0 + 1, et ainsi de suite
