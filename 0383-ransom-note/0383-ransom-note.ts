function canConstruct(ransomNote: string, magazine: string): boolean {
    const lettersMap = new Map<string, number>()

    for (const letter of magazine) {
        const count = (lettersMap.get(letter) || 0) + 1
        lettersMap.set(letter, count)
    }

    for (const letter of ransomNote) {
        if (!lettersMap.has(letter)) return false

        const count = lettersMap.get(letter) - 1
        if (count < 0) return false

        lettersMap.set(letter, count)
    }

    return true
};
