const { TreeNode } = require('../src/trees/max-depth-binary-tree');

function arrayToTree(arr) {
    if (!arr.length) return null;
    
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length && i < arr.length) {
        const node = queue.shift();
        
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

module.exports = [
    {
        input: [arrayToTree([3,9,20,null,null,15,7])],
        expected: 3
    },
    {
        input: [arrayToTree([1,null,2])],
        expected: 2
    },
    {
        input: [arrayToTree([])],
        expected: 0
    },
    {
        input: [arrayToTree([1])],
        expected: 1
    }
];
