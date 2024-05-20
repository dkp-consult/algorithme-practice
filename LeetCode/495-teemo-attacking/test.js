const { timeSeries1, duration1, expected1, timeSeries2, duration2, expected2 } = require('./data');
const app = require('./app');

function test() {
    console.assert(app(timeSeries1, duration1) === expected1, `Test 1 Failed`);
    console.assert(app(timeSeries2, duration2) === expected2, `Test 2 Failed`);
    console.log('All tests passed');
}

test();
