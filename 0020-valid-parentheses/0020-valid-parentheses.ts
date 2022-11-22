function isValid(s: string): boolean {
    const stack: string[] = []

    const bracketMap = new Map<string, string>([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ])

    for (const bracket of s.split('')) {
        const isCloseBracket = bracketMap.has(bracket)

        if (!isCloseBracket) {
            stack.push(bracket)
            continue
        }

        const openBracket = stack.pop()
        if (openBracket !== bracketMap.get(bracket)) {
            return false
        }
    }

    return stack.length === 0
}
