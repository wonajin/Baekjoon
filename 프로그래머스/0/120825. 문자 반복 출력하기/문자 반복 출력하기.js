function solution(my_string, n) {
    let answer = [];
    x=my_string.split('');
    
    for(let i=0;i<x.length;i++){
        for(let j=0;j<n;j++){
        answer.push(x[i]);
    }
    }
    return answer.join('');
}