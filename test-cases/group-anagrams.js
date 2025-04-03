module.exports = [
    {
        input: [["eat","tea","tan","ate","nat","bat"]],
        expected: [["bat"],["nat","tan"],["ate","eat","tea"]]
    },
    {
        input: [[""]],
        expected: [[""]]
    },
    {
        input: [["a"]],
        expected: [["a"]]
    }
];
