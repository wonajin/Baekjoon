function solution(phone_number) {
    let answer = '';
    let len = phone_number.length - 4; 

    for (let i = 0; i < len; i++) {
        answer += '*';
    }

    answer += phone_number.slice(-4);
    return answer;
}
