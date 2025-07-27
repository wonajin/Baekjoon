function solution(a, b) {
    var answer = 0;
    const x= String(a)+b;
    const y= b+String(a);
    
    Number(x) > Number(y)? answer = Number(x): answer=Number(y) ;
    
    return answer;
}