function twoSum(numbers: number[], target: number): number[] {
    let [left, right] = [0, numbers.length - 1];

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        const isTarget = sum === target;
        if (isTarget) return [left + 1, right + 1];

        const isTargetGreater = sum < target;
        if (isTargetGreater) left++;

        const isTargetLess = target < sum;
        if (isTargetLess) right--;
    }

    return [-1, -1];
};