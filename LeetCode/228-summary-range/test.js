const { nums1, expected1, nums2, expected2 } = require('./data');
const app = require('./app');

function test() {
    console.assert(JSON.stringify(app(nums1)) === JSON.stringify(expected1), `Test 1 Failed`);
    console.assert(JSON.stringify(app(nums2)) === JSON.stringify(expected2), `Test 2 Failed`);
    console.log('All tests passed');
}

test();
