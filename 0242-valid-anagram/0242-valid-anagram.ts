function isAnagram(s: string, t: string): boolean {
    const lettersMap = new Map<string, number>()

    for (const letter of s) {
        if (lettersMap.has(letter)) {
            const letterCount = lettersMap.get(letter)
            lettersMap.set(letter, letterCount + 1)
            continue
        }
        lettersMap.set(letter, 1)
    }

    for (const letter of t) {
        if (!lettersMap.has(letter)) return false

        const letterCount = lettersMap.get(letter)
        lettersMap.set(letter, letterCount - 1)
    }

    for (const [_, letterCount] of lettersMap) {
        if (letterCount !== 0) return false
    }

    return true
};