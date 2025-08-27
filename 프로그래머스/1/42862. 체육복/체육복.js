function solution(n, lost, reserve) {
    // 1. 중복 제거
    let newLost = [];
    let newReserve = [];

    for (let i = 0; i < lost.length; i++) {
        if (!reserve.includes(lost[i])) {
            newLost.push(lost[i]);
        }
    }
    for (let i = 0; i < reserve.length; i++) {
        if (!lost.includes(reserve[i])) {
            newReserve.push(reserve[i]);
        }
    }

    // 2. 빌려주기
    newLost.sort((a, b) => a - b);
    newReserve.sort((a, b) => a - b);

    for (let i = 0; i < newReserve.length; i++) {
        for (let j = 0; j < newLost.length; j++) {
            if (newLost[j] === newReserve[i] - 1 || newLost[j] === newReserve[i] + 1) {
                newLost.splice(j, 1); // 빌려주고 lost에서 제거
                break; // 한 명한테만 빌려줄 수 있으니까 break
            }
        }
    }

    // 3. 최종 결과
    return n - newLost.length;
}
