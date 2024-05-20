// test.js
const app = require('./app'); // Assuming your function is named 'app' and exported from app.js
const testData = require('./data');

testData.forEach(test => {
    const arrCopy = [...test.arr]; // Create a copy of the test array to pass into the function
    app(arrCopy); // This function modifies the array in place
    console.log(`Input: arr = ${test.arr}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Output: ${arrCopy}`);
    console.log(`Test Passed: ${JSON.stringify(arrCopy) === JSON.stringify(test.expected)}`);
    console.log('-------------------------');
});
