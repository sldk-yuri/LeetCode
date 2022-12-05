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

function maxDepth(root: TreeNode | null): number {
    if (!root) return null

    const queue = [root]
    let depth = 0

    while (queue.length) {
        const queueLength = queue.length

        for (let i = 0; i < queueLength; i++) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        depth++
    }

    return depth
};