const app = require('./app');
const data = require('./data');

data.forEach((test, index) => {
  const result = app.findWords(test.words);
  console.assert(
    JSON.stringify(result) === JSON.stringify(test.output),
    `Test case ${index + 1} failed: expected ${JSON.stringify(test.output)} but got ${JSON.stringify(result)}`
  );
});

console.log("All test cases passed!");
