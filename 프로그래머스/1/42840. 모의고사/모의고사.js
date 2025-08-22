function solution(answers) {
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let scores = [0, 0, 0]; // 세 사람 점수 저장

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === p1[i % p1.length]) scores[0]++;
        if (answers[i] === p2[i % p2.length]) scores[1]++;
        if (answers[i] === p3[i % p3.length]) scores[2]++;
    }

    let maxScore = Math.max(...scores);
    let result = [];

    for (let idx = 0; idx < scores.length; idx++) {
    if (scores[idx] === maxScore) {
        result.push(idx + 1);
    }
}

    return result;
}
