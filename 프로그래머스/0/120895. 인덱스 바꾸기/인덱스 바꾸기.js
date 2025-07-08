function solution(my_string, num1, num2) {
    var answer = '';
    let tmp=[];
        my_string=my_string.split('');
    
    tmp=my_string[num1];
    my_string[num1]=my_string[num2];
    my_string[num2]=tmp;
    
       my_string= my_string.join('');
    return my_string;
}