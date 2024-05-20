// test.js
const app = require('./app');
const testData = require('./data');

testData.forEach(test => {
    const output = app(test.prices);
    console.log(`Input: ${test.prices}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Output: ${output}`);
    console.log(`Test Passed: ${JSON.stringify(output) === JSON.stringify(test.expected)}`);
    console.log('----------------------------');
});
