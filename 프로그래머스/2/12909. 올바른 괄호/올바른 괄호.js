function solution(s){
    var answer = false;
    let a=0;
    
 
    for(let i=0;i<s.length;i++){
      if(s[i]=="(") a++;
      else  a--;
        
      if(a<0) return answer;
        
    }

    if(a===0) return true;

    return answer;
}