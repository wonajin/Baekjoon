function solution(n) {
  let answer = [];
  let i = 2;

  while (i <= n) {
    if (n % i === 0) {
      if (!answer.includes(i)) {
        answer.push(i);
      }
      n = n / i; // 나눈 값으로 갱신!
    } else {
      i++;
    }
  }

  return answer;
}
