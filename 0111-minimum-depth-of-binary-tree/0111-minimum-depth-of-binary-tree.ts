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

function minDepth(root: TreeNode | null): number {
    if (!root) return null

    const queue = [root]
    let treeDepth = 1

    while (queue.length) {
        const queueLength = queue.length

        for (let i = 0; i < queueLength; i++) {
            const node = queue.shift()
            const [leftNode, rightNode] = [node.left, node.right]

            if (!leftNode && !rightNode) return treeDepth

            if (leftNode) queue.push(leftNode)
            if (rightNode) queue.push(rightNode)
        }

        treeDepth++
    }

    return treeDepth
};