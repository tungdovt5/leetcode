module.exports = [
    {
        input: [["Trie", "insert", "search", "search", "startsWith", "insert", "search"],
                [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]],
        expected: [null, null, true, false, true, null, true],
        isClassTest: true
    },
    {
        input: [["Trie", "insert", "search", "startsWith"],
                [[], ["hello"], ["hell"], ["hell"]]],
        expected: [null, null, false, true],
        isClassTest: true
    }
];
