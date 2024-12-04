n = int(input())

divisor = 2
while divisor * divisor <= n:
    while n % divisor == 0:
        print(divisor)
        n //= divisor
    divisor += 1

if n > 1:
    print(n)
