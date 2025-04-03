const { TreeNode } = require('../src/trees/invert-binary-tree');

function arrayToTree(arr) {
    if (!arr.length) return null;
    
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length && i < arr.length) {
        const node = queue.shift();
        
        // Left child
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        
        // Right child
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

function treeToArray(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        const node = queue.shift();
        result.push(node ? node.val : null);
        
        if (node) {
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    // Remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }
    
    return result;
}

module.exports = [
    {
        input: [arrayToTree([4,2,7,1,3,6,9])],
        expected: [4,7,2,9,6,3,1],
        transform: result => treeToArray(result)
    },
    {
        input: [arrayToTree([2,1,3])],
        expected: [2,3,1],
        transform: result => treeToArray(result)
    },
    {
        input: [arrayToTree([])],
        expected: [],
        transform: result => treeToArray(result)
    }
];
