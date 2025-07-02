function solution(numbers, k) {
  var x = ((k - 1) * 2) % numbers.length;
  return numbers[x];
}
