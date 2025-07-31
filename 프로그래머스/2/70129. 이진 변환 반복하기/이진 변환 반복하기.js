function solution(s) {
    let changeCount = 0;  
    let zeroCount = 0;   

    while (s !== "1") {
        const removedZeros = s.split('').filter(ch => ch === '0').length;
        zeroCount += removedZeros;

        const oneCount = s.length - removedZeros;

        s = oneCount.toString(2);

        changeCount++;
    }

    return [changeCount, zeroCount];
}
