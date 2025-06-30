function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);

  //  원본 배열의 값이 정렬본에서 몇 번째인지 찾아서 +1 (순위)
  return emergency.map(v => sorted.indexOf(v) + 1);
}
