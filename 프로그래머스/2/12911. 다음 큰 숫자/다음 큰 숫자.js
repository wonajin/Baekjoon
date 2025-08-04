function solution(n) {
  const oneCount = n.toString(2).split('').filter(c => c === '1').length;

  while (true) {
    n++;
    const nextCount = n.toString(2).split('').filter(c => c === '1').length;
    if (nextCount === oneCount) return n;
  }
}
