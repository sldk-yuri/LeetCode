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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const sentinel = new ListNode();

    sentinel.next = head;

    const fast = moveFast(sentinel, n);
    const slow = moveSlow(sentinel, fast);

    slow.next = slow.next.next || null;

    return sentinel.next;
};

const moveFast = (fast, n) => {
    for (let i = 1; i <= (n + 1); i++) {
        fast = fast.next;
    }

    return fast;
}

const moveSlow = (slow, fast) => {
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}