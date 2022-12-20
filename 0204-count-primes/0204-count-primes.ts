function countPrimes(n: number): number {
    if (n <= 1) return 0

    const primeArr = new Array(n).fill(true)
    primeArr[0] = false
    primeArr[1] = false

    for (let i = 2; i * i < n; i++) {
        if (!primeArr[i]) continue

        for (let j = i * i; j < n; j += i) primeArr[j] = false
    }

    return primeArr.filter(Boolean).length
};

