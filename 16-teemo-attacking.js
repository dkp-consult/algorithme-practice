// LeetCode challenge 16 : https://leetcode.com/problems/teemo-attacking/

var findPoisonedDuration = function(timeSeries, duration) {

};

findPoisonedDuration([1,2,3,4,5,6,7,8,9], 5)

// First idea
/*     var poisonTime = duration;
    var timing = [];

    timeSeries.forEach(element => function poisonTimer(element) {
        var test = [element, (element + duration) - 1]
        return test
    })
    console.log(timeSeries[0]) */

    // Failling with duration = 5

    /* var preAnswer = [];
    var answer = preAnswer;
    if (duration === 0) {
        return 0
    }
    for (i=0; i<timeSeries.length; i++) {
        var calc = [timeSeries[i], ((timeSeries[i] + duration) - 1)]
        preAnswer.push(calc)
    }
    console.log(answer.join(',').replace(/,/g, ''))
    function getUnique(array) {
        var uniqueArray = [];
        for (i=0; i<array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    var preSoluce = getUnique(answer.join(',').replace(/,/g, ''));
    var soluce = preSoluce.length;
    console.log(preSoluce);
    // return soluce; */