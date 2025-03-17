import sys

def input():
    return sys.stdin.readline().strip()

n = int(input())

count = [0] * 10001  

for _ in range(n):
    count[int(input())] += 1  

for num in range(10001):  
    if count[num] > 0:  
        for _ in range(count[num]):  
            print(num)
