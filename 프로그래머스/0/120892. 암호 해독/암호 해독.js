function solution(cipher, code) {
    var answer = [];
    cipher.split('');
    
    for(let i=code-1;i<cipher.length;i=i+code)
        answer.push(cipher[i]);
    return answer.join('');
}