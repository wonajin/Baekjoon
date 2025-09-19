function solution(k, tangerine) {

    let count = {};
    for (let t of tangerine) {
        if (count[t] === undefined) count[t] = 0;
        count[t]++;
    }

    let arr = Object.values(count).sort((a, b) => b - a);

    let answer = 0;
    for (let c of arr) {
        k -= c;      
        answer++;    
        if (k <= 0) break; 
    }

    return answer;
}
