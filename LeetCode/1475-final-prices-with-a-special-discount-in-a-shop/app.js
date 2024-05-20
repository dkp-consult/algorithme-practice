var app = function(prices) {
    const result = [];

    for (var i = 0; i < prices.length; i ++) {
    var discountPrice = prices[i];
    for (var j = i+1; j < prices.length; j++) {
        if(prices[i] >= prices[j]) {
            discountPrice = prices[i] - prices[j]
            break
        }
    }
    result.push(discountPrice);
}
return result
};

module.exports = app ; 