function solution(new_id) {
    // 1단계: 대문자 → 소문자
    new_id = new_id.toLowerCase();

    // 2단계: 허용된 문자만 남기기 (소문자, 숫자, -, _, .)
    new_id = new_id.replace(/[^a-z0-9-_.]/g, '');

    // 3단계: 연속된 마침표(.) → 하나의 마침표
    new_id = new_id.replace(/\.{2,}/g, '.');

    // 4단계: 처음이나 끝의 마침표 제거
    new_id = new_id.replace(/^\.|\.$/g, '');

    // 5단계: 빈 문자열이면 'a' 대입
    if (new_id === '') new_id = 'a';

    // 6단계: 길이가 16자 이상이면 15자까지만 남김
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
        // 끝에 마침표가 있으면 제거
        new_id = new_id.replace(/\.$/, '');
    }

    // 7단계: 길이가 2자 이하라면, 마지막 문자를 길이 3이 될 때까지 붙이기
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }

    return new_id;
}
