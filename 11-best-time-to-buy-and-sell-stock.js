// LeetCode challenge 11 : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//EZ soluce : https://relatablecode.com/javascript-leetcode-best-time-to-buy-and-sell-stock 

// Actually failed this challenge. My method : 

/* 
    1) Find the small & high value and create var for her
    2) Check for find the index of small & high value and create a var => Fail
    3) Check if seelIndex > buyIndex 
        In this case, calcul the diff between the two value & return him
        
*/

/* 
    const = maxProfit = function(prices) {
        let max = 0;
        let buy = prices[0];

        for (let i = 1; i < prices.length; i++){
            const sell = prices[i];
            // if selling at this point is a loss then try buying at that point in time
            if (sell - buy < 0){
                buy = sell;
            } else {
                // if we have possible profit then see if it's the most profit
                max = Math.max(max, sell - buy)
            }
        };
        return max;
    };
*/
