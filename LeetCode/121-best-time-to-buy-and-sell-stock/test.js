const app = require('./app');
const testCases = require('./data');

testCases.forEach(({input, expected}, index) => {
  const result = app(input);
  console.log(`Test Case #${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
});
