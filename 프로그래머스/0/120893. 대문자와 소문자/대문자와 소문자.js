function solution(my_string) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] >= 'A' && my_string[i] <= 'Z') {
      answer += my_string[i].toLowerCase();
    } else if (my_string[i] >= 'a' && my_string[i] <= 'z') {
      answer += my_string[i].toUpperCase();
    }
  }

  return answer;
}
