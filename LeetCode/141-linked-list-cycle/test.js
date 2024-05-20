const { head1, pos1, expected1, head2, pos2, expected2, head3, pos3, expected3 } = require('./data');
const app = require('./app');

function test() {
    console.assert(app(head1, pos1) === expected1, `Test 1 Failed`);
    console.assert(app(head2, pos2) === expected2, `Test 2 Failed`);
    console.assert(app(head3, pos3) === expected3, `Test 3 Failed`);
    console.log('All tests passed');
}

test();
