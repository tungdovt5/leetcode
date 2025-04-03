module.exports = [
    {
        input: ["anagram", "nagaram"],
        expected: true
    },
    {
        input: ["rat", "car"],
        expected: false
    },
    {
        input: ["", ""],
        expected: true
    },
    {
        input: ["aacc", "ccac"],
        expected: false
    }
];
