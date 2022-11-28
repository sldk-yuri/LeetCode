function climbStairs(n: number): number {
    let [first, second] = [1, 1]

    for (let i = 0; i < n - 1; i++) {
        const temp = first
        first = first + second
        second = temp
    }

    return first
};