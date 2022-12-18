function searchInsert(nums: number[], target: number): number {
    let [left, right] = [0, nums.length - 1]

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (target === nums[mid]) return mid
        if (target > nums[mid]) left = mid + 1
        if (target < nums[mid]) right = mid - 1
    }
    
    return left
};