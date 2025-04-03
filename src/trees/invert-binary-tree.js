/**
 * Problem: Invert Binary Tree
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * Example:
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    if (root === null) {
        return null;
    }
    
    // Swap children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recursively invert subtrees
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
}

module.exports = {
    TreeNode,
    invertTree
};
