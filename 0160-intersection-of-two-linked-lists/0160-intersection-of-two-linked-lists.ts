/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null

    let [rootA, rootB] = [headA, headB]

    while (rootA !== rootB) {
        rootA = !rootA ? headB : rootA.next
        rootB = !rootB ? headA : rootB.next
    }

    return rootA
};