const app = require('./app'); 
const testData = require('./data');

testData.forEach(({ date1, date2, expected }) => {
    const output = app(date1, date2);
    console.log(`Testing dates between ${date1} and ${date2}`);
    console.log(`Expected: ${expected}, Got: ${output}`);
    console.log(`Test Passed: ${output === expected}`);
    console.log('-------------------------');
});
