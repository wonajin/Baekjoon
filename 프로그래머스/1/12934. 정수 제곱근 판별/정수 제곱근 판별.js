function solution(n) {
    let sqrt = Math.sqrt(n);
    
    if (Number.isInteger(sqrt)) {
        return (sqrt + 1) * (sqrt + 1);
    } else {
        return -1;
    }
}
