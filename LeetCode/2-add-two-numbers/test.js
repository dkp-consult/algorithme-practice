const { app } = require('./app');
const data = require('./data');

const linkedListFromArray = (arr) => {
    let head = null, tail = null;
    for (let num of arr) {
        const newNode = { val: num, next: null };
        if (!head) {
            head = newNode;
        } else {
            tail.next = newNode;
        }
        tail = newNode;
    }
    return head;
};

const arrayFromLinkedList = (list) => {
    const result = [];
    while (list) {
        result.push(list.val);
        list = list.next;
    }
    return result;
};

const l1 = linkedListFromArray(data.l1);
const l2 = linkedListFromArray(data.l2);

const expected = [7, 0, 8];

const test = (description, fn) => {
    try {
        fn();
        console.log(`${description} - Passed`);
    } catch (error) {
        console.log(`${description} - Failed`);
        console.error(error);
    }
};

test('add two numbers', () => {
    const result = app(l1, l2);
    if (JSON.stringify(arrayFromLinkedList(result)) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${expected}, but got ${arrayFromLinkedList(result)}`);
    }
});
