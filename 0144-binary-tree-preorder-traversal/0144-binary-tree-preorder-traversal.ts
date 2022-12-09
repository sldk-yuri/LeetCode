/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return []

    const stack = [root]
    const values = []

    while (stack.length) {
        let node = stack.pop()

        if (!node) continue

        values.push(node.val)
        stack.push(node.right)
        stack.push(node.left)
    }

    return values
};