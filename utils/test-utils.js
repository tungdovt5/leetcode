function runTestCases(fn, testCases) {
    testCases.forEach((test, index) => {
        const { input, expected } = test;
        const result = fn(...input);
        console.log(`Test case ${index + 1}:`);
        console.log(`Input: ${formatInput(input)}`);
        console.log(`Output: ${formatOutput(result)}`);
        if (expected !== undefined) {
            console.log(`Expected: ${formatOutput(expected)}`);
            console.log(`Status: ${JSON.stringify(result) === JSON.stringify(expected) ? '✓' : '✗'}`);
        }
        console.log('');
    });
}

function formatInput(input) {
    return input.map(arg => Array.isArray(arg) ? `[${arg}]` : arg).join(', ');
}

function formatOutput(output) {
    return Array.isArray(output) ? `[${output}]` : output;
}

module.exports = { runTestCases };
