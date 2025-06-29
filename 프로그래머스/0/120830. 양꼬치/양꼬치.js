function solution(n, k) {
    let answer = n*12000+k*2000;

    if(n>=10) answer=answer-(2000*Math.floor(n/10));
    return answer;
}