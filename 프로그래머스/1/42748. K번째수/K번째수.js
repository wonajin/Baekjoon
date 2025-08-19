function solution(array, commands) {
    let answer = [];
    
    for (let [i, j, k] of commands) {//j까지잘라야 원래는j전에 짤림 근데 시작이 0
        let sliced = array.slice(i - 1, j);
        
        sliced.sort((a, b) => a - b);
        
        answer.push(sliced[k - 1]);//마찬가지로 배열은 0부터
    }
    
    return answer;
}
