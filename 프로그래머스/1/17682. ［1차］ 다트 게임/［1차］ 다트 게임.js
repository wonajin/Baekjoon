function solution(dartResult) {
    let scores = [];
    let num = "";

    for (let i = 0; i < dartResult.length; i++) {
        let ch = dartResult[i];

        if (!isNaN(ch)) { 
            num += ch;
        } else if (ch === "S" || ch === "D" || ch === "T") {
            let score = parseInt(num);
            num = "";

            if (ch === "S") score **= 1;
            if (ch === "D") score **= 2;
            if (ch === "T") score **= 3;

            scores.push(score);
        } else if (ch === "*") {
            scores[scores.length - 1] *= 2;
            if (scores.length > 1) {
                scores[scores.length - 2] *= 2;
            }
        } else if (ch === "#") {
            scores[scores.length - 1] *= -1;
        }
    }

    return scores.reduce((a, b) => a + b, 0);
}
