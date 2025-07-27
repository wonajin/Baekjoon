function solution(my_string, overwrite_string, s) {
  const a = my_string.slice(0, s);
  const b = overwrite_string;   
  const c = my_string.slice(s + overwrite_string.length); 

  const answer = a + b + c;
  return answer;
}
