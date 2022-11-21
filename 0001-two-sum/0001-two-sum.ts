function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const idx = i
        const currentNum = nums[idx]
        const difference = target - currentNum

        if (map.has(difference)) {
            return [idx, map.get(difference)]
        }

        map.set(currentNum, idx)
    }

    return [-1, -1]
}
