function solution(n) {
    let array=[];
    let i=0;
    let cnt=Math.floor((n+1)/2);

    for(i=0;i<cnt;i++){
         array[i] = 2*i + 1;
    }
    
    
    return array;
}