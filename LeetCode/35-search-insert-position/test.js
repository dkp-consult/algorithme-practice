const data = require('./data');
const app = require('./app');

data.forEach(({ input, output }, index) => {
  const result = app(input.nums, input.target);
  console.assert(result === output, `Test case ${index + 1} failed: expected ${output} but got ${result}`);
});

console.log("All tests passed!");
