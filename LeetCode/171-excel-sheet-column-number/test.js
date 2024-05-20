const { columnTitle1, expected1, columnTitle2, expected2, columnTitle3, expected3 } = require('./data');
const app = require('./app');

function test() {
    console.assert(app(columnTitle1) === expected1, `Test 1 Failed`);
    console.assert(app(columnTitle2) === expected2, `Test 2 Failed`);
    console.assert(app(columnTitle3) === expected3, `Test 3 Failed`);
    console.log('All tests passed');
}

test();
