module.exports = [
    {
        input: ["()"],
        expected: true
    },
    {
        input: ["()[]{}"],
        expected: true
    },
    {
        input: ["(]"],
        expected: false
    },
    {
        input: ["([)]"],
        expected: false
    },
    {
        input: ["{[]}"],
        expected: true
    }
];
