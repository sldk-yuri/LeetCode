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

function rightSideView(root: TreeNode | null): number[] {
    const isBaseCase = root === null;
    if (isBaseCase) return [];

    return bfs([root]);
};

const bfs = (queue, rightSide = []) => {
    while (queue.length) {
        let prev = null;

        for (let i = (queue.length - 1); 0 <= i; i--) {
            const node = queue.shift();

            prev = node;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        rightSide.push(prev.val);
    }

    return rightSide;
}