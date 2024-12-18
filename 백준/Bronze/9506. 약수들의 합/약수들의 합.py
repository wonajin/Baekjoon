while True:
    n = int(input())
    if n == -1:
        break
    
    divisors = []
    for d in range(1, int(n**0.5) + 1):
        if n % d == 0:
            # d는 약수
            if d != n and d != 1:  # 1은 별도 처리, n은 제외
                divisors.append(d)
            # n//d는 d의 짝 약수
            other = n // d
            if other != n and other != d and other != 1:
                divisors.append(other)
    # 1은 항상 약수 (자기 자신 제외 가능)
    divisors.append(1)
    
    # 약수들을 오름차순 정렬
    divisors.sort()
    
    # 약수들의 합 계산
    total = sum(divisors)
    
    # 완전수 판별
    if total == n:
        # 출력 형식: n = 1 + 2 + 3 ...
        print(f"{n} = {' + '.join(str(d) for d in divisors)}")
    else:
        print(f"{n} is NOT perfect.")
