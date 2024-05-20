module.exports = {
    operations1: ["MyQueue", "push", "push", "peek", "pop", "empty"],
    inputs1: [[], [1], [2], [], [], []],
    expected1: [null, null, null, 1, 1, false],

    operations2: ["MyQueue", "push", "push", "push", "peek", "pop", "peek"],
    inputs2: [[], [1], [2], [3], [], [], []],
    expected2: [null, null, null, null, 1, 1, 2],
};
