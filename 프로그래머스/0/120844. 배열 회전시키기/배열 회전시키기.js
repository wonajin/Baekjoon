function solution(numbers, direction) {
  if (direction === "right") {
    // 맨 뒤 꺼 빼서 맨 앞에 붙이기
    numbers.unshift(numbers.pop());
  } else {
    // 맨 앞 꺼 빼서 맨 뒤에 붙이기
    numbers.push(numbers.shift());
  }
  return numbers;
}
