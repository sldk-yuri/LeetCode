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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return []

    const queue = [root]
    const result = []

    while (queue.length) {
        const row = []
        const qeueuLength = queue.length

        for (let i = 0; i < qeueuLength; i++) {
            const node = queue.shift()
            row.push(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        result.length % 2 ? result.push(row.reverse()) : result.push(row)
    }

    return result

};