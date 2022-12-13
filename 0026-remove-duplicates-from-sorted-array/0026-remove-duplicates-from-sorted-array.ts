function removeDuplicates(nums: number[]): number {
    let [left, right] = [1, 1]

    while (right < nums.length) {
        if (nums[right - 1] === nums[right]) {
            right++
            continue
        }

        nums[left] = nums[right]
        left++
        right++
    }

    return left
};