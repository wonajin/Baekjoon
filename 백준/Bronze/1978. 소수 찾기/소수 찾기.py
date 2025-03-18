import sys
import math

data = sys.stdin.read().split()
n = int(data[0])
count = 0  

for i in range(1, n + 1):
    num = int(data[i])  

    if num < 2:
        continue  

    for j in range(2, int(math.sqrt(num)) + 1):
        if num % j == 0:
            break  
    else:
        count += 1  

print(count)
