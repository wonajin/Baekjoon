function solution(num, k) {
    
    const str=String(num);
    
    for(let i=0;i<str.length;i++){
        if(Number(str[i])==k) return i+1;
    }
    
    return -1;
}