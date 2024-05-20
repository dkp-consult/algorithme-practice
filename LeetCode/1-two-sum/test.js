const assert = require('assert').strict;
const app = require('./app');
const testData = require('./data');

testData.forEach(({ input, output }, index) => {
  try {
    const result = app(input.nums, input.target);
    assert.deepEqual(result, output, `Test case ${index + 1} failed`);
    console.log(`Test case ${index + 1}: Passed`);
  } catch (error) {
    console.error(`Test case ${index + 1}: Failed - ${error.message}`);
  }
});
