module.exports = [
    {
        input: [[1,2,3]],
        expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
    },
    {
        input: [[0]],
        expected: [[],[0]]
    }
];
