const app = require('./app'); // This assumes your solution function is named this way and exported from app.js
const testData = require('./data');

testData.forEach(({ s, expected }) => {
    const output = app(s);
    console.log(`Input: s = "${s}"`);
    console.log(`Expected: ${expected}`);
    console.log(`Output: ${output}`);
    console.log(`Test Passed: ${output === expected}`);
    console.log('-------------------------');
});
