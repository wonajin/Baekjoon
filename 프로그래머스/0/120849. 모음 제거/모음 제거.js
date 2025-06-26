function solution(my_string) {
    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        let ch = my_string[i];

        // 모음이 아니면 결과 문자열에 추가
        if (!'aeiou'.includes(ch)) {
            answer += ch;
        }
    }

    return answer;
}
