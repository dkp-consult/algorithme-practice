const app = require('./app');
const data = require('./data');

data.forEach((test, index) => {
  const result = app.findTheDifference(test.s, test.t);
  console.assert(result === test.output, `Test case ${index + 1} failed: expected ${test.output} but got ${result}`);
});

console.log("All test cases passed!");
