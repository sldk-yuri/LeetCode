function search(nums: number[], target: number): number {
    if (!nums.length) return -1

    let [start, end] = [0, nums.length - 1]

    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        const currentNum = nums[middle]

        if (target === currentNum) return middle
        if (target < currentNum) end = middle - 1
        if (target > currentNum) start = middle + 1
    }

    return -1
}
