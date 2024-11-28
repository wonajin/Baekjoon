a=int(input())
b=int(input())

b_1=b%10
b_10=(b//10)%10
b_100=b//100

print(b_1*a,b_10*a,b_100*a,b*a)