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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return false

    const stackLeft = [root.left]
    const stackRight = [root.right]

    while (stackLeft.length && stackRight.length) {
        const leftNode = stackLeft.pop()
        const rightNode = stackRight.pop()

        if (!leftNode && !rightNode) continue
        if (!leftNode || !rightNode) return false
        if (leftNode.val !== rightNode.val) return false

        stackLeft.push(leftNode.right)
        stackLeft.push(leftNode.left)

        stackRight.push(rightNode.left)
        stackRight.push(rightNode.right)
    }

    return true
};