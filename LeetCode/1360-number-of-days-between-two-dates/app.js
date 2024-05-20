var app = function(date1, date2) {
    var dateOne = new Date(date1).getTime();
    var dateTwo = new Date(date2).getTime();
    return Math.abs((dateTwo - dateOne) / (1000 * 60 * 60 * 24));
};

module.exports = app; // Correct export statement
