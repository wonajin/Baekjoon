function solution(lottos, win_nums) {
    let zeroCount = 0;  
    let matchCount = 0;

    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            zeroCount++; 
        } else {
            for (let j = 0; j < win_nums.length; j++) {
                if (lottos[i] === win_nums[j]) {
                    matchCount++;
                    break;
                }
            }
        }
    }

    function getRank(count) {
        return count >= 2 ? 7 - count : 6;
    }

    let maxRank = getRank(matchCount + zeroCount);
    let minRank = getRank(matchCount);             

    return [maxRank, minRank];
}
