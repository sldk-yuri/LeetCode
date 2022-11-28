function majorityElement(nums: number[]): number {
    const numsMap = new Map<number, number>()

    for (const num of nums) {
        const count = (numsMap.get(num) || 0) + 1
        numsMap.set(num, count)
    }

    for (let [key, value] of numsMap) {
        if (value > nums.length / 2) return key
    }
};