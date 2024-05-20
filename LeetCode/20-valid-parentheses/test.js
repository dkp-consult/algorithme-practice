const app = require('./app');
const testData = require('./data');

testData.forEach(({ input, output }, index) => {
    const result = app(input);
    if (result === output) {
        console.log(`Test Case ${index + 1}: Passed`);
    } else {
        console.log(`Test Case ${index + 1}: Failed (Expected ${output} but got ${result})`);
    }
});
