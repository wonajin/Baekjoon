function solution(my_string) {
    var answer = [];
    my_string=my_string.split("");
    for(let i=0;i<my_string.length;i++){
        if(my_string[i]>=`0`&&my_string[i]<=`9`) answer.push(Number(my_string[i]));
    }
    answer.sort((a, b) => a - b);
    return answer;
}