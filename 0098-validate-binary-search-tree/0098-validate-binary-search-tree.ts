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

function isValidBST(root: TreeNode | null): boolean {
    if (!root) return false

    const queue: [TreeNode, number, number][] = [[root, -Infinity, +Infinity]]

    while (queue.length) {
        const [node, min, max] = queue.shift()

        const val = node.val

        if (val <= min || val >= max) return false

        if (node.left) queue.push([node.left, min, val])
        if (node.right) queue.push([node.right, val, max])
    }

    return true
};




