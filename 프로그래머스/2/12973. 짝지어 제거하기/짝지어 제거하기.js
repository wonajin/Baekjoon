function solution(s) {
  let stack = [];

  for (let ch of s) {
    if (stack[stack.length - 1] === ch) {
      stack.pop();  
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
