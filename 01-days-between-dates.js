// LeetCode challenge 1 : https://leetcode.com/problems/number-of-days-between-two-dates/

var daysBetweenDates = function(date1, date2) {
    var dateOne = new Date(date1).getTime();
    var dateTwo = new Date(date2).getTime();
if (dateOne < dateTwo) {
    return (dateTwo - dateOne)/1000/60/60/24;
} else {
    return (dateOne - dateTwo)/1000/60/60/24;
}

};