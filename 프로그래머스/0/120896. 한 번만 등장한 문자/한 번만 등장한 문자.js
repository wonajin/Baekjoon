function solution(s) {
  const count = {};

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    count[ch] = (count[ch] || 0) + 1;
  }

  const once = [];
  for (let key in count) {
    if (count[key] === 1) {
      once.push(key);
    }
  }

  return once.sort().join('');
}
