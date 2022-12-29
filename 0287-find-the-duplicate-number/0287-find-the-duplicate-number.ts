function findDuplicate(nums: number[]): number {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        const isPrevDuplicate = nums[i - 1] === nums[i]
        if (isPrevDuplicate) return nums[i];
    }

    return -1;
};