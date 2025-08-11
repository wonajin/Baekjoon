function solution(s) {
    var answer = true;
    
    if(s.length!=4&&s.length!=6) return false;
    
    for(let i=0;i<s.length;i++){
        if(s[i]>='a'&&s[i]<='z') return false
        if(s[i]>='A'&&s[i]<='Z') return false
    }
    
    return answer;
}