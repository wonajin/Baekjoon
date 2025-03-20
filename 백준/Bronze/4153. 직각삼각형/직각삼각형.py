import sys

while True:
    x = list(map(int, sys.stdin.readline().split()))
    
    if x == [0, 0, 0]: 
        break

    x.sort() 
    if x[0]**2 + x[1]**2 == x[2]**2:
        print("right")
    else:
        print("wrong")
