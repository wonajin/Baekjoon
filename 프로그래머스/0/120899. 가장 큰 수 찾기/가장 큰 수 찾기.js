function solution(array) {
  const max = Math.max(...array);      // 최대값
  const idx = array.indexOf(max);      // 최대값의 인덱스
  return [max, idx];                   // 배열로 묶어서 반환
}
