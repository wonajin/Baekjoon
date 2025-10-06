function solution(elements) {
    const n = elements.length;
    const arr = elements.concat(elements); // 원형 수열 만들기
    const set = new Set();

    // 1칸짜리 ~ n칸짜리 연속 부분 수열 합
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i < n; i++) {
            const sum = arr.slice(i, i + len).reduce((a, b) => a + b, 0);
            set.add(sum);
        }
    }

    return set.size; // 서로 다른 합의 개수
}
