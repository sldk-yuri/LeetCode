function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0

    let leftPtr = 0
    let rightPtr = 1
    let maxProfit = 0

    while (rightPtr < prices.length) {
        const buyPrice = prices[leftPtr]
        const sellPrice = prices[rightPtr]

        if (sellPrice > buyPrice) {
            const currentProfit = sellPrice - buyPrice
            maxProfit = Math.max(maxProfit, currentProfit)
        } else {
            leftPtr = rightPtr
        }

        rightPtr++
    }

    return maxProfit
};