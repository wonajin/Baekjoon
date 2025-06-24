const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

// 한 줄 입력 처리 (공백으로 구분된 값)
const numbers = input.split(' ').map(Number);

// 문제 풀이 함수
function solution(numbers) {
  // 여기에 코드 작성
  return numbers[0] - numbers[1]; 
}

// 결과 출력
console.log(solution(numbers)); 