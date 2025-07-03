function solution(my_string) {
    var answer = 0;
    
    Number(my_string.split(""));
    
    for(let i=0;i<my_string.length;i++){
        if(my_string[i]>=1&&my_string[i]<=9) answer+=Number(my_string[i]);
    }

    return answer;
}