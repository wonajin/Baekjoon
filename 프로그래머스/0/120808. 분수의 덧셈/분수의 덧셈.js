function solution(numer1, denom1, numer2, denom2) {
    
    let numer3 = numer1 * denom2 + numer2 * denom1;
    let denom3 = denom1 * denom2;
    
    let divisor = gcd(numer3, denom3);
    numer3 = numer3 / divisor;
    denom3 = denom3 / divisor;
    
    var answer = [numer3, denom3];
    return answer;
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}