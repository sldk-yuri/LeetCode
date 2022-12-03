/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
    return function (n: number): number {
        if (n === 1) return 1

        let left = 1
        let right = n

        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            isBadVersion(mid) ? right = mid : left = mid + 1
        }

        return left
    };
};