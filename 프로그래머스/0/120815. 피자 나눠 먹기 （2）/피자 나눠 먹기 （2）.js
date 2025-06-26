function solution(n) {
    var answer = 0;
    
    //6과 n의 최소 공배수를 구한 후 그걸 6으로 다시 나눠줘야한다
    
    const gcd = (a, b) => {
            if (b === 0) return a;
            return gcd(b, a % b);
    };
    // 최소공배수 구하기
    const lcm= (a,b )=>{
        return (a*b)/ gcd(a,b);//최소송배수*최대공약수=A*N
    };
    
    

    answer=lcm(6,n)/6;
    return answer;
}


