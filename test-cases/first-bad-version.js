module.exports = [
    {
        input: [5],
        expected: 4,
        setup: function(solution) {
            const isBadVersion = version => version >= 4;
            return solution(isBadVersion);
        }
    },
    {
        input: [1],
        expected: 1,
        setup: function(solution) {
            const isBadVersion = version => version >= 1;
            return solution(isBadVersion);
        }
    },
    {
        input: [3],
        expected: 2,
        setup: function(solution) {
            const isBadVersion = version => version >= 2;
            return solution(isBadVersion);
        }
    }
];
