function solution(n) {
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  var answer = 0;

  for (let i = 1; i <= 11; i++) {
    if (factorial(i) > n) {
      answer = i - 1;
      break;
    }
  }

  return answer;
}
