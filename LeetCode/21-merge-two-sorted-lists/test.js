const { list1_1, list2_1, expected1, list1_2, list2_2, expected2, list1_3, list2_3, expected3 } = require('./data');
const app = require('./app');

function test() {
    console.assert(JSON.stringify(app(list1_1, list2_1)) === JSON.stringify(expected1), `Test 1 Failed`);
    console.assert(JSON.stringify(app(list1_2, list2_2)) === JSON.stringify(expected2), `Test 2 Failed`);
    console.assert(JSON.stringify(app(list1_3, list2_3)) === JSON.stringify(expected3), `Test 3 Failed`);
    console.log('All tests passed');
}

test();
