function isSubsequence(s: string, t: string): boolean {
    if (!s.length || (s === t)) return true;
    if (s.length > t.length) return false;

    let j = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[j] === t[i]) {
            j++;
        }
    }

    return j === s.length;
};