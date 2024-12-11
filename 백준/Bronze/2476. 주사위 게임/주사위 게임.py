# 가장 큰 상금을 저장할 변수
max_prize = 0

# 사람 수 입력 받기
N = int(input())

# 각 사람의 주사위 결과 입력 받기
for _ in range(N):
    dice = list(map(int, input().split()))
    dice.sort()

    if dice[0] == dice[1] == dice[2]:
        # 같은 눈이 3개인 경우
        prize = 10000 + dice[0] * 1000
    elif dice[0] == dice[1] or dice[1] == dice[2]:
        # 같은 눈이 2개인 경우
        prize = 1000 + dice[1] * 100
    else:
        # 모두 다른 눈인 경우
        prize = dice[2] * 100

    max_prize = max(max_prize, prize)

# 가장 큰 상금 출력
print(max_prize)
