const { runTestCases } = require('./utils/test-utils');
const fs = require('fs');
const path = require('path');

function findSolutions() {
    const solutions = [];
    const categories = fs.readdirSync('./src');
    
    categories.forEach(category => {
        const files = fs.readdirSync(`./src/${category}`)
            .filter(f => f.endsWith('.js'))
            .map(f => ({
                name: f.replace('.js', ''),
                category,
                path: `./src/${category}/${f}`
            }));
        solutions.push(...files);
    });
    
    return solutions;
}

const problem = process.argv[2];
if (!problem) {
    const solutions = findSolutions();
    console.log('Available problems:');
    solutions.forEach(({ name, category }) => {
        console.log(`- ${name} (${category})`);
    });
    console.log('\nRun: .\\run.cmd main.js <problem>');
    process.exit(0);
}

try {
    const solutions = findSolutions();
    const solution = solutions.find(s => s.name === problem);
    if (!solution) throw new Error('Problem not found');

    const solutionModule = require(solution.path);
    const tests = require(`./test-cases/${problem}`);
    console.log(`Running: ${problem} (${solution.category})\n`);
    runTestCases(solutionModule, tests);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
