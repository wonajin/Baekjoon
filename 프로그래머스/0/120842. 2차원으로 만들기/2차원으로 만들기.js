function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(num_list[i + j]);
    }
    answer.push(temp);
  }

  return answer;
}
