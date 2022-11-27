function containsDuplicate(nums: number[]): boolean {
    const numMap = new Map<number, number>()

    for (const num of nums) {
        if (numMap.has(num)) return true
        numMap.set(num, 1)
    }

    return false
};