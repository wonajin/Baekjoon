function solution(array, n) {
  var answer = array[0];
  let x = Math.abs(array[0] - n);

  for (let i = 1; i < array.length; i++) {
    let diff = Math.abs(array[i] - n);

    if (x > diff) {
      x = diff;
      answer = array[i];
    } else if (x === diff && array[i] < answer) {
      // 거리 같으면 더 작은 값
      answer = array[i];
    }
  }

  return answer;
}
