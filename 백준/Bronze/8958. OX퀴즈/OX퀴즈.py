import sys

n = int(input().strip())

for _ in range(n):
    result = input().strip()  
    score = 0 
    count = 0 

    for char in result:
        if char == "O":
            count += 1  
            score += count  
        else:
            count = 0  

    print(score) 
