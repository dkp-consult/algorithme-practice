const { num1_1, num2_1, expected1, num1_2, num2_2, expected2, num1_3, num2_3, expected3 } = require('./data');
const app = require('./app');

function test() {
    console.assert(app(num1_1, num2_1) === expected1, `Test 1 Failed`);
    console.assert(app(num1_2, num2_2) === expected2, `Test 2 Failed`);
    console.assert(app(num1_3, num2_3) === expected3, `Test 3 Failed`);
    console.log('All tests passed');
}

test();
