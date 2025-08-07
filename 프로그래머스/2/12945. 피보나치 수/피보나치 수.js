function solution(n) {
    let a=0;let b=1;let f=0;let tmp=0;
    
    if(n==0) return a%1234567;
    if(n==1) return b%1234567;
    
    for (let i = 2; i <= n; i++) {
        let temp = (a + b) % 1234567;
        a = b;
        b = temp;
    }

    return b;
}
