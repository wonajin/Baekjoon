function solution(order) {
    var answer = 0;
    
    while(order>0){
        if(order%10===3 ||order%10===6 ||order%10===9 )
            answer++;
        
        order=Math.floor(order/10);
    }
    return answer;
}