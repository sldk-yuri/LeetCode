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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head || !head.next || left === right) {
        return head;
    }

    let idx = 1;
    let prevLower = null;
    let curLower = head;

    while (curLower && idx < left) {
        prevLower = curLower;
        curLower = curLower.next;
        idx++;
    }

    let storedPrevLower = prevLower;
    let storedCurLower = curLower;
    let prevPtr = null;
    let tmpPtr = null;

    while (curLower && idx <= right) {
        tmpPtr = curLower.next;
        curLower.next = prevPtr;
        prevPtr = curLower;
        curLower = tmpPtr;
        idx++;
    }

    if (storedPrevLower) {
        storedPrevLower.next = prevPtr;
    }

    storedCurLower.next = curLower;

    return storedPrevLower ? head : prevPtr;
};