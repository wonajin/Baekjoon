function solution(array) {
  const count = {};  // 등장 횟수를 저장할 객체

  // 1단계: 각 숫자의 등장 횟수 세기
  for (let num of array) {
    count[num] = (count[num] || 0) + 1;
  }

  // 2단계: 최빈값 찾기
  let max = 0;
  let answer = -1;
  let isDuplicated = false;

  for (let key in count) {
    if (count[key] > max) {
      max = count[key];
      answer = Number(key);
      isDuplicated = false;
    } else if (count[key] === max) {
      isDuplicated = true; // 최빈값이 여러 개면 플래그 켜기
    }
  }

  return isDuplicated ? -1 : answer;
}
