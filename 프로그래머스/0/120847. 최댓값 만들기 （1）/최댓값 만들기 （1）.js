function solution(numbers) {
    
    let max1=0, max2=0,tmp=0;
    
    for(let i=0;i<numbers.length;i++){
         for(let j=i+1;j<numbers.length;j++){
                if(numbers[i]<numbers[j])
                    {
                        tmp=numbers[i];
                        numbers[i]=numbers[j];
                        numbers[j]=tmp;
                    }
        }
    }
    max1=numbers[0];
    max2=numbers[1];

    var answer =  max1* max2;

    return answer;
}