function solution(age) {
  var answer = '';

  // 1) age를 문자열로 바꿔서 하나씩 돌기
  const strAge = String(age);

  for (let i = 0; i < strAge.length; i++) {
    // 2) 각 자리 숫자를 가져오기
    let num = Number(strAge[i]);

    answer += String.fromCharCode(97 + num);
  }

  return answer;
}
