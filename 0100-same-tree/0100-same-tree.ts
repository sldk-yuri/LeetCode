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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const queue: [TreeNode, TreeNode][] = [[p, q]]

    while (queue.length) {
        const [node1, node2] = queue.pop()

        if (!node1 && !node2) continue
        if (!node1 || !node2) return false

        const [node1val, node2val] = [node1.val, node2.val]

        if (node1val !== node2val) return false

        const [node1left, node1right] = [node1.left, node1.right]
        const [node2left, node2right] = [node2.left, node2.right]

        queue.push([node1left, node2left])
        queue.push([node1right, node2right])
    }

    return true
};