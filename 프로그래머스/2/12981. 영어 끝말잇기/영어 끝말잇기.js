function solution(n, words) {
    const used = new Set(); // 이전에 나온 단어 저장

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // 1) 중복 단어인지?
        if (used.has(word)) {
            const player = (i % n) + 1; // 누구 차례인지
            const turn = Math.floor(i / n) + 1; // 몇 번째 턴인지
            return [player, turn];
        }

        // 2) 끝말잇기 규칙 어긴 경우 (앞 단어의 끝과 현재 단어의 시작 비교)
        if (i > 0) {
            const prev = words[i - 1];
            if (prev[prev.length - 1] !== word[0]) {
                const player = (i % n) + 1;
                const turn = Math.floor(i / n) + 1;
                return [player, turn];
            }
        }

        // 사용된 단어에 추가
        used.add(word);
    }

    // 탈락자 없으면
    return [0, 0];
}
