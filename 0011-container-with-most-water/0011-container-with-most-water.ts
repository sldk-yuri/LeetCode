function maxArea(height: number[]): number {
    let maxAmount = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        const width = right - left
        const minHeight = Math.min(height[left], height[right])

        maxAmount = Math.max(maxAmount, width * minHeight)

        height[left] < height[right] ? left++ : right--
    }

    return maxAmount
};