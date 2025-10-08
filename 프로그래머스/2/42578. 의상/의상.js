function solution(clothes) {
  const map = {};

  for (let [name, type] of clothes) {
    if (!map[type]) map[type] = 0;
    map[type]++;
  }


  let answer = 1;
  for (let type in map) {
    answer *= (map[type] + 1); 
  }

  return answer - 1;
}
