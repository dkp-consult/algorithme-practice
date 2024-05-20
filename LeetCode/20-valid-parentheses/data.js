const testData = [
    { input: "()", output: true },
    { input: "()[]{}", output: true },
    { input: "(]", output: false },
    { input: "([{}])", output: true },
    { input: "(([]){})", output: true },
    { input: "(([]){})[", output: false },
    { input: "(([]){}){", output: false },
    { input: ")", output: false },
    { input: "", output: true }
];

module.exports = testData;
