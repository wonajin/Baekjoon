function solution(balls, share) {
  function factorial(n) {
    let result = 1n;  // BigInt로 초기화!
    for (let i = 1n; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  balls = BigInt(balls);
  share = BigInt(share);

  return Number(
    factorial(balls) / (factorial(share) * factorial(balls - share))
  );
}
