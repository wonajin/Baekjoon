function solution(arr)
{
    let answer=[]
    let cnt=arr.length;

    for(let i=0;i<cnt;i++){
        if(arr[i]!==arr[i-1]){
            answer.push(arr[i]);
        }
    }
    
    return answer;
}