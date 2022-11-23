function isPalindrome(s: string): boolean {
    const lettersArray = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase().split('')

    let startPtr = 0
    let endPtr = lettersArray.length - 1

    while (startPtr <= endPtr) {
        const leftLetter = lettersArray[startPtr]
        const rightLetter = lettersArray[endPtr]

        if (leftLetter !== rightLetter) return false

        startPtr++
        endPtr--
    }

    return true
};