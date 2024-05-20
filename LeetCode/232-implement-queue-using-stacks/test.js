const { operations1, inputs1, expected1, operations2, inputs2, expected2 } = require('./data');
const MyQueue = require('./app');

function test() {
    let queue;
    const results1 = [];
    operations1.forEach((op, i) => {
        if (op === "MyQueue") {
            queue = new MyQueue();
            results1.push(null);
        } else {
            results1.push(queue[op](...inputs1[i]));
        }
    });
    console.assert(JSON.stringify(results1) === JSON.stringify(expected1), `Test 1 Failed`);

    const results2 = [];
    operations2.forEach((op, i) => {
        if (op === "MyQueue") {
            queue = new MyQueue();
            results2.push(null);
        } else {
            results2.push(queue[op](...inputs2[i]));
        }
    });
    console.assert(JSON.stringify(results2) === JSON.stringify(expected2), `Test 2 Failed`);
    
    console.log('All tests passed');
}

test();
